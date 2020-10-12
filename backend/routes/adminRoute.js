import express from "express";

import Admin from "../models/adminModel";

const router = express.Router();

// Admin Login
router.post("/login", async (req, res) => {
  const loginAdmin = await Admin.findOne({
    username: req.body.username,
    password = req.body.password,
  })

  if (loginAdmin) {
    res.send({
      name: loginAdmin.username,
      token: getToken(loginAdmin)
    });
  } else {
    res.status(401).send({ msg: "Invalid Username or Password" })
  }
})

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
