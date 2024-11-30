import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import administrator from "../models/administrator.js";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//route for user login
const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await administrator.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User does not exists." });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.json({ success: false, message: error.message });
  }
};

// route for admin registration
const registerAdmin = async (req, res) => {
  const { email, phone, username, password } = req.body;

  try {
    // Check if admin already exists
    const existingAdmin = await administrator.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ msg: "Admin already exists" });
    }

    // Create a new admin
    const newAdmin = new administrator({
      email,
      phone,
      username,
      password,  // Hash password here if necessary
    });

    // Save the new admin to the database
    await newAdmin.save();

    res.status(201).json({ msg: "Admin registered successfully", admin: newAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

export { loginAdmin, registerAdmin};
