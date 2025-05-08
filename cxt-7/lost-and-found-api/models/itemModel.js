const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
    },
    description: {
      type: String,
    },
    locationFound: {
      type: String,
    },
    dateFound: {
      type: Date,
    },
    claimed: {
      type: Boolean,
      default: false
    },
  },
  {
    timesStamps: true,
  }
);

const itemModel = mongoose.model("Item", itemSchema);

module.exports = itemModel;
