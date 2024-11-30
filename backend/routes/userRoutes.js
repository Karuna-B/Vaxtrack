import express from "express";
import {
  createUser,
  getAllUsers,
  addVaccineToUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();
// Route to create a new user
router.post("/create", createUser);

// Route to get all users
router.get("/", getAllUsers);

// Route to add a vaccine to a user
router.put("/:userId/vaccines", addVaccineToUser);

// Route to delete a user
router.delete("/delete/:userId", deleteUser);

export default router;
