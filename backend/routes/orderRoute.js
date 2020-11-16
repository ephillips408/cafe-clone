import express from "express";
import Order from "../models/orderModel";
import expressAsyncHandler from "express-async-handler";

const router = express.Router();

// Create an order
router.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ msg: "Cart is empty" });
    } else {
      const order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        totalPrice: req.body.totalPrice,
      });
      const createdOrder = await order.save();
      res.status(201).send({ msg: "New order created", order: createdOrder });
    }
  })
);

export default router;
