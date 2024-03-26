import express from "express";
import tasksController from "../controllers/tasksController.js";

const router = express.Router();


router.get("/tasks", tasksController.getAll);

router.get("/tasks/:id", tasksController.getTask);

router.post("/tasks", tasksController.registerTask);

router.put("/tasks/:id", tasksController.alterTask);

router.delete("/tasks/:id", tasksController.deleteTask);

export default router