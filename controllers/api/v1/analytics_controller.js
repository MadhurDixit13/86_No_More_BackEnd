const mongoose = require("mongoose");
const moment = require("moment");
const Order = require("../../../models/order");

module.exports.getAnalytics = async (req, res, next) => {
	const startDate = moment().utc().subtract(6, "days").startOf("day").toDate();
	const endDate = moment().utc().endOf("day").toDate();
	const orders = await Order.find({
		restid: req.userData.userId,
		createdAt: {
			$gte: startDate,
			$lte: endDate,
		},
	}).populate({
		path: "items",
		populate: {
			path: "item_id",
			model: "Menu",
			populate: {
				path: "ingredients",
				populate: { path: "inventory_id", model: "Inventory" },
			},
		},
	});
	const orderAnalytics = {};
	const inventoryAnalytics = {};
	for (let order of orders) {
		const idx = Math.floor(
			(order.createdAt - startDate) / (1000 * 60 * 60 * 24)
		);
		for (let item of order.items) {
			if (!(item.item_id.menuname in orderAnalytics)) {
				orderAnalytics[item.item_id.menuname] = [0, 0, 0, 0, 0, 0, 0];
			}
			orderAnalytics[item.item_id.menuname][idx] += item.quantity;

			for (let ingredient of item.item_id.ingredients) {
				if (!(ingredient.inventory_id.itemname in inventoryAnalytics)) {
					inventoryAnalytics[ingredient.inventory_id.itemname] = [
						0, 0, 0, 0, 0, 0, 0,
					];
				}
				inventoryAnalytics[ingredient.inventory_id.itemname][idx] +=
					ingredient.quantity;
			}
		}
	}
	res.status(200).json({ orderAnalytics, inventoryAnalytics });
};
