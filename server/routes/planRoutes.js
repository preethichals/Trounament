import express from "express";
import formidable from "express-formidable";
import {
  createPlanController,
  deletePlanController,
  getPlanController,
  getSinglePlanController,
  planCategoryController,
  planCountController,
  planFilterController,
  planPageListController,
  planSampleImageController,
  updatePlanController,
} from "../controllers/planController.js";

const router = express.Router();

//routes
// create plan
router.post(
  "/create-plan",
  formidable(),
  createPlanController
);

//get all plan
router.get("/get-plan", getPlanController);

//single plan
router.get("/get-plan/:slug", getSinglePlanController);

//get sample image
router.get("/plan-sampleimage/:pid", planSampleImageController);

//delete plan
router.delete(
  "/delete-plan/:pid",
  deletePlanController
);

// Update plan
router.put(
  "/update-plan/:pid",
  formidable(),
  updatePlanController
);

//Plan filter
router.post("/plan-filter", planFilterController);

//Plan count
router.get("/plan-count", planCountController);

//Plan per page
router.get("/plan-list/:page", planPageListController);

//Category wise plan list
router.get("/plan-category/:slug", planCategoryController);

export default router;
