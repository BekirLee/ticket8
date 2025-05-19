import connectDB from "./app/db.js";
import express from "express";
import cors from "cors";
import { config } from "dotenv";
import dotenv from "dotenv";
import router from "./src/routes/productRoute.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products/", router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`${PORT}is running`);
});
