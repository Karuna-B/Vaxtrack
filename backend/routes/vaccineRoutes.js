const express = require("express");
const router = express.Router();
const vaccineController = require("../controllers/vaccineController"); // Controller for vaccine-related operations

// Route to create a new vaccine
router.post("/", vaccineController.createVaccine);

// Route to get all vaccines
router.get("/", vaccineController.getAllVaccines);

module.exports = router;
