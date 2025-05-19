import express from "express";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("connected");
  } catch (err) {
    console.log("cant connnect");
  }
};

export default connectDB;
