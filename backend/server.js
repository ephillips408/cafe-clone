import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import config from "./config";
import adminRoute from "./routes/adminRoute";
import productRoute from "./routes/productRoute"

dotenv.config();

const mongodbURL = config.MONGODB_URL;

mongoose
  .connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason))

const app = express()
app.use(bodyParser.json())

app.use("/api/admins", adminRoute)
app.use("/api/products", productRoute)

app.listen(5000, () => console.log("Server is up on http://localhost:5000"))