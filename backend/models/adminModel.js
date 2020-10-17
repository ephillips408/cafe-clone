import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, dropDups: true },
  password: { type: String, required: true },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

adminSchema.pre("save", async function (next) {
  const admin = this;
  if (admin.isModified("password")) {
    admin.password = await bcrypt.hash(admin.password, 8);
  }
  next();
});

adminSchema.statics.findByCredentials = async (username, password) => {
  try {
    const admin = await Admin.findOne({ username });
    if (!admin) {
      throw new Error("Unable to login.");
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      throw new Error("Unable to login.");
    }

    return admin;
  } catch (error) {
    console.log(error);
  }
};

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
