const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(

  {

    quantity: {
      type: Number,
      required: true,
    },

    productId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      // required: true,
    },
  },


);

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
