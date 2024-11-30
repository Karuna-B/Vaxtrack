import User from "../models/users.js";
import Vaccine from "../models/vaccines.js";

const createUser = async (req, res) => {
  const {
    fullName,
    fathersName,
    fathersCitizenshipNo,
    mothersName,
    mothersCitizenshipNo,
    dateOfBirth,
    birthCertificateNo,
    phoneNumber,
    email,
    vaccineIds,
  } = req.body;

  try {
    // Create a new user with the provided data
    const newUser = new User({
      fullName,
      fathersName,
      fathersCitizenshipNo,
      mothersName,
      mothersCitizenshipNo,
      dateOfBirth,
      birthCertificateNo,
      phoneNumber,
      email,
      vaccinesTaken: vaccineIds, // Array of vaccine IDs
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Respond with the saved user
    res.status(201).json(savedUser);
  } catch (error) {
    // Handle errors and respond with an error message
    res.status(400).json({ message: "Error creating user", error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate("vaccinesTaken"); 
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users",   error: error.message });
  }
};

const addVaccineToUser = async (req, res) => {
  const { userId } = req.params;
  const { vaccineId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Check if the vaccine exists
    const vaccine = await Vaccine.findById(vaccineId);
    if (!vaccine) return res.status(404).json({ message: "Vaccine not found" });

    // Add the vaccine to the user's vaccine list
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

export { createUser, getAllUsers, addVaccineToUser, deleteUser };
