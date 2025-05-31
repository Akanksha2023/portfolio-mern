import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';// Load environment variables from .env file

dotenv.config();
import connectDB from './db.js'; // Import the database connection function
connectDB(); // Function to connect to the database
import mongoose from 'mongoose'; // Import mongoose for database operations
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});