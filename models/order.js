const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
	{
		items: [
			{
				item_name: {
					type: String,
					required: true,
				},
				quantity: {
					type: Number,
				},
			},
		],
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
