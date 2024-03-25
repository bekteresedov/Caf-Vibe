import mongoose from "mongoose";
import { config } from "dotenv";

config();

const connectionString = process.env.DB_URI;

export async function createDbConnection() {
  try {
    await mongoose.connect(connectionString);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    throw error;
  }
}
