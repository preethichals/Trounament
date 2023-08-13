import express from "express";
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controllers/categoryController.js";

const router = express.Router();

//routes
// Create category
router.post("/create-category", createCategoryController);

// Update category
router.put("/update-category/:id", updateCategoryController);

// getAll category
router.get("/get-category", categoryController);

// single category
router.get("/single-category/:slug", singleCategoryController);

// delete category
router.delete("/delete-category/:id", deleteCategoryController);


export default router;
