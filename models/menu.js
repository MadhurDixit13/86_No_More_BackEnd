const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
	{
		menuname: {
			type: String,
			required: true,
		},
		restid: {
			type: mongoose.Types.ObjectId,
			required: true,
			ref: "User",
		},
		costmenu: {
			type: Number,
			required: true,
		},
		ingredients: [
			{
				inventory_id: {
					type: mongoose.Types.ObjectId,
					required: true,
					ref: "Inventory",
				},
				quantity: {
					type: Number,
					required: true,
				},
			},
		],
	},
	{
		timestamps: true,
	}
);

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
