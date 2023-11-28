const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
	{
		items: [
			{
				item_id: {
					type: mongoose.Types.ObjectId,
					required: true,
					ref: "Menu",
				},
				quantity: {
					type: Number,
				},
			},
		],
		Ordercost: {
			type: Number,
			required: true,
			ref: "Cost",
		},
		restid: {
			type: mongoose.Types.ObjectId,
			required: true,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
