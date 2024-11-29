const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController"); 

// Route to create a new user
router.post("/", userController.createUser);

// Route to get all users
router.get("/", userController.getAllUsers);

// Route to add a vaccine to a user
router.put("/:userId/vaccines", userController.addVaccineToUser);

// Route to delete a user
router.delete("/:userId", userController.deleteUser);

module.exports = router;
