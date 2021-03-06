import express from "express";
import Product from "../models/productModel";

const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.setHeader("Content-Range", `posts 0-20/${products.length}`) // Needed for React-Admin pagination.
  res.send(products);
});

// Get a single product
router.get("/:id", async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);

  if (product) {
    return res.send(product);
  } else {
    return res.status(404).send({ message: "Product not found." });
  }
});

// Create a product
router.post("/", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    countInStock: req.body.countInStock,
    description: req.body.description,
  });

  const newProduct = await product.save();

  if (newProduct) {
    return res
      .status(200)
      .send({ message: "New Product Created", data: newProduct });
  }
  return res.status(500).send({ message: "Error in creating product." });
});

// Update a product
// Issue with this. Postman sending 200 when countInStock is missing.
// However, the product does not update, and error message shows in terminal with Product validation failed.
router.put("/:id", async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);

  try {
    if (product) {
      product.name = req.body.name;
      product.price = req.body.price;
      product.image = req.body.image;
      product.countInStock = req.body.countInStock;
      product.description = req.body.description;
    }

    const updatedProduct = product.save();

    if (updatedProduct) {
      return res
        .status(200)
        .send({ message: "Product Updated", data: updatedProduct });
    }
    return res.status(500).send({ message: "Error in updating product." });
  } catch (error) {
    return res.status(500).send({ message: "Error in updating product." });
  }
});

// Delete a product
router.delete("/:id", async (req, res) => {
  const deletedProduct = await Product.findById(req.params.id);

  if (deletedProduct) {
    await deletedProduct.remove();
    res.status(204).send({ message: "Product Deleted" });
  } else {
    res.send({ message: "Error in Deletion" });
  }
});

export default router;
