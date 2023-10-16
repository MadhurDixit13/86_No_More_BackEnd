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
	const orderAnalytics = [];
	const inventoryAnalytics = [];
	for (let order of orders) {
		const idx = Math.floor(
			(order.createdAt - startDate) / (1000 * 60 * 60 * 24)
		);
		for (let item of order.items) {
			let index = orderAnalytics.findIndex((order)=>order.menuName === item.item_id.menuname)
			if (index===-1) {
				orderAnalytics.push({menuName:item.item_id.menuname,data:[0, 0, 0, 0, 0, 0, 0]});
				index = orderAnalytics.length-1
			}
			orderAnalytics[index].data[idx] += item.quantity;

			for (let ingredient of item.item_id.ingredients) {
				let index = inventoryAnalytics.findIndex((order)=>order.itemName === ingredient.inventory_id.itemname)
				if (index===-1) {
					inventoryAnalytics.push({itemName:ingredient.inventory_id.itemname,data:[0, 0, 0, 0, 0, 0, 0]});
					index = inventoryAnalytics.length-1
				}
				inventoryAnalytics[index].data[idx] += ingredient.quantity;			
			}
		}
	}
	res.status(200).json({ orderAnalytics, inventoryAnalytics });
};
