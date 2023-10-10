const mongoose = require("mongoose");
const Inventory = require("../../../models/inventory");
const Menu = require("../../../models/menu");
const Order = require("../../../models/order");

module.exports.getOrders = async (req, res, next) => {
	const orders = await Order.find({ restid: req.userData.userId })
		.sort("-createdAt")
		.populate({ path: "items", populate: { path: "item_id", model: "Menu" } });
	res
		.status(200)
		.json({ data: orders, message: "Fetched Orders Successfully" });
};

module.exports.createOrder = async (req, res, next) => {
	const items = [];
	try {
		const sess = await mongoose.startSession();
		sess.startTransaction();
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
					await inventory.save({ session: sess });
				}
			}
			items.push({ item_id: menuItem, quantity: quantity });
		}
		const newOrder = new Order({
			items,
			restid: req.userData.userId,
		});
		await newOrder.save({ session: sess });
		await sess.commitTransaction();
		res.status(201).json({ message: "Order placed successfully" });
	} catch (err) {
		console.log(err);
		return res
			.status(500)
			.json({ message: "Error ocurred", error: err.message });
	}
};
