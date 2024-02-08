import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const port = process.env.PORT;

const app = express();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
