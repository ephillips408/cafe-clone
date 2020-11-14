import mongoose, { Mongoose } from "mongoose";

const orderSchema = new mongoose.Schema({
  orderItems: [
    {
      name: { type: String, required: true },
      qty: { type: Number, required: true },
      price: { type: Number, required: true },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],
  shippingAddress: {
    name: { type: String, required: true },
    address: { type: String, required: true },
    apartmentInfo: { type: String },
    city: { type: String, required: true },
    shippingState: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  totalPrice: { type: Number, required: true },
});

const Order = mongoose.Model("Order", orderSchema);

export default Order;
