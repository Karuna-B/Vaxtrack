
import  Vaccine from "../models/vaccines.js";

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

    res.status(201).json(savedVaccine);
  } catch (error) {
    console.error("Error creating vaccine:", error);

    res.status(400).json({ message: "Error creating vaccine", error });
  }
};

const getAllVaccines = async (req, res) => {
  try {
    const vaccines = await Vaccine.find();
    res.status(200).json(vaccines);
  } catch (error) {
    res.status(500).json({ message: "Error fetching vaccines", error });
  }
};

export { createVaccine, getAllVaccines };
