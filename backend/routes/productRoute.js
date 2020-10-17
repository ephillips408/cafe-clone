import express from "express";
import Product from "../models/productModel";

const router = express.Router();

// Create a product
router.post("/", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
  })

  const newProduct = await product.save();

  if (newProduct) {
    return res
      .status(200)
      .send({ message: "New Product Created", data: newProduct })
  }
  return res.status(500).send({ message: "Error in creating product." })
});

export default router;