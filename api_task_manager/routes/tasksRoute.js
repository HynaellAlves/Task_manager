import express from "express";
import path from "path";
import tasksController from "../controllers/tasksController.js";

const baseURL = "/tasks";
const router = express.Router();


router.get(baseURL, tasksController.getAll);

router.get(baseURL + "/:id", tasksController.getTask);

router.post(baseURL, tasksController.registerTask);

router.put(baseURL + "/:id", tasksController.alterTask);

router.delete(baseURL + "/:id", tasksController.deleteTask);

export default router