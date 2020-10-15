import express from "express";

import Admin from "../models/adminModel";
import { getToken } from "../utils";

const router = express.Router();

// Admin Login
// Try to refactor this with a try/catch block to avoid deprecation.
router.post("/login", async (req, res) => {
  const admin = await Admin.findByCredentials(req.body.username, req.body.password)
  
  if (admin) {
    res.status(200).send({
      username: admin.username,
      token: getToken(admin),
    })
  } else {
    res.status(401).send({ msg: "Invalid login." })
  }
});

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
