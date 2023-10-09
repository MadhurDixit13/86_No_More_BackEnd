const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  restname: {
    type: String,
    required: true,
  },
  itemname: {
    type: String,
    required: true,
  },
  restid:{
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  quantity: {
    type: Number,
    default: 0,
  },
  costperitem: {
    type: Number,
    required: true,
  },
  datebought: {
    type: Date,
    required: true,
  },
  dateexpired: {
    type: Date,
    required: true,
  }
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
