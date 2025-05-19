import Product from "../modules/prdductModule.js";
import dotenv from "dotenv";

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

export const getProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.delete(req.params.id);
    res.json("deleted");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
