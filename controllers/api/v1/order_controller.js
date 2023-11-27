const mongoose = require("mongoose");
const Inventory = require("../../../models/inventory");
const Menu = require("../../../models/menu");
const Order = require("../../../models/order");
const { sendEmail } = require("./email-template");

module.exports.getOrders = async (req, res, next) => {
	const orders = await Order.find({ restid: req.userData.userId })
		.sort("-createdAt")
		.populate({ path: "items", populate: { path: "item_id", model: "Menu" } });

	res
		.status(200)
		.json({ order: orders, message: "Fetched Orders Successfully" });
};

module.exports.createOrder = async (req, res, next) => {
	const items = [];
	try {
		const sess = await mongoose.startSession();
		sess.startTransaction();
		const Ordercost = req.body.Ordercost;
		for (let item of req.body.items) {
			const menuItem = await Menu.findById(item.id);
			const quantity = item.quantity;
			for (let ingredient of menuItem.ingredients) {
				const inventory = await Inventory.findById(ingredient.inventory_id);

				if (inventory.quantity < quantity * ingredient.quantity) {
					return res
						.status(403)
						.json({ message: "Do not have sufficient inventory items" });
				} else {
					inventory.quantity =
						inventory.quantity - quantity * ingredient.quantity;
					if (inventory.quantity < 10) {
						await sendEmail(
							req.userData.email,
							inventory.itemname,
							inventory.quantity
						);
					}
					await inventory.save({ session: sess });
				}
			}
			items.push({ item_id: menuItem, quantity: quantity });
		}
		const newOrder = new Order({
			items,
			Ordercost,
			restid: req.userData.userId,
		});
		await newOrder.save({ session: sess });
		await sess.commitTransaction();
		res.status(200).json({
			message: "Order placed successfully",
			data: {
				order: newOrder,
			},
			success: true,
		});
	} catch (err) {
		console.log(err);
		return res
			.status(500)
			.json({ message: "Error ocurred", error: err.message });
	}
};
