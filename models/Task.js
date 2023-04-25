import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
	task: { type: String, required: true },
	completed: { type: Boolean, default: false },
});

//if model already exist we will send that model otherwise we will create new and export it.
export default mongoose.models.Task || mongoose.model("Task", taskSchema);
