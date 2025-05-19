import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
} from "../controllers/productController.js";
import express from "express";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.get("/:id", getProduct);
router.delete("/:id", deleteProduct);

export default router;
