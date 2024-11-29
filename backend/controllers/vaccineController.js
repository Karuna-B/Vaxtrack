const Vaccine = require("../models/vaccines");

// Route to create a new vaccine
const createVaccine = async (req, res) => {
  const {
    vaccineName,
    vaccinationDate,
    batchNumber,
    district,
    province,
    localBody,
    healthPostName,
  } = req.body;

  try {
    // Log the request body to ensure it is being passed correctly
    console.log("Received Vaccine Data:", req.body);

    // Create a new vaccine document
    const newVaccine = new Vaccine({
      vaccineName,
      vaccinationDate,
      batchNumber,
      district,
      province,
      localBody,
      healthPostName,
    });

    // Save the vaccine document to the database
    const savedVaccine = await newVaccine.save();

    // Log the saved vaccine for debugging purposes
    console.log("Saved Vaccine:", savedVaccine);

    // Send back the saved vaccine object as response
    res.status(201).json(savedVaccine);
  } catch (error) {
    // Log the error for debugging
    console.error("Error creating vaccine:", error);

    // Send an error response
    res.status(400).json({ message: "Error creating vaccine", error });
  }
};

// Route to get all vaccines
const getAllVaccines = async (req, res) => {
  try {
    const vaccines = await Vaccine.find();
    res.status(200).json(vaccines);
  } catch (error) {
    res.status(500).json({ message: "Error fetching vaccines", error });
  }
};

module.exports = { createVaccine, getAllVaccines };
