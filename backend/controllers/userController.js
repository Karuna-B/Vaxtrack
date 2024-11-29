const User = require("../models/users");
const Vaccine = require("../models/vaccines");

const createUser = async (req, res) => {
  const { fullName, email, vaccineIds } = req.body;

  try {
    const newUser = new User({
      fullName,
      email,
      vaccinesTaken: vaccineIds,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: "Error creating user", error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate("vaccinesTaken"); // Populating the vaccines taken field
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

const addVaccineToUser = async (req, res) => {
  const { userId } = req.params;
  const { vaccineId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Check if vaccine exists
    const vaccine = await Vaccine.findById(vaccineId);
    if (!vaccine) return res.status(404).json({ message: "Vaccine not found" });

    // Add vaccine to user's vaccine list
    user.vaccinesTaken.push(vaccineId);
    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: "Error adding vaccine to user", error });
  }
};

const deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};

module.exports = { createUser, getAllUsers, addVaccineToUser, deleteUser };
