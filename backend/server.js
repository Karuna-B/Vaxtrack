import dotenv from 'dotenv'; // Load environment variables from .env file
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import vaccineRoutes from './routes/vaccineRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

dotenv.config(); // Initialize dotenv to load environment variables

const app = express();
app.use(express.json());

import cors from 'cors';
app.use(cors());

const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Use routes
app.use('/users', userRoutes);
app.use('/vaccines', vaccineRoutes);
app.use('/admin', adminRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
