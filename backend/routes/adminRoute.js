import express from "express";

import Admin from "../models/adminModel";

const router = express.Router();

// Create an admin account
router.get("/createadmin", async (req, res) => {
  try {
    const admin = new Admin({
      username: process.env.ADMIN_USERNAME,
      password: process.env.ADMIN_PASSWORD,
    });

    const newAdmin = await admin.save();
    res.send(admin);
    next();
  } catch (error) {
    res.send({ msg: error.message });
  }
});

export default router;
