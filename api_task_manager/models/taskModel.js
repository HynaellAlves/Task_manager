import mongoose from "mongoose";

const task = {
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, require: true },
  status: { type: String, require: true },
  status_code: { type: Number, require: true }
}

const taskSchema = new mongoose.Schema(task, { versionKey: false });

const taskModel = mongoose.model("tasks", taskSchema);

export default taskModel