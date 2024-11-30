import express from "express";
import {
  createVaccine,
  getAllVaccines,
} from "../controllers/vaccineController.js";

const router = express.Router();
// Route to create a new vaccine
router.post("/", createVaccine);

// Route to get all vaccines
router.get("/", getAllVaccines);

export default router;
