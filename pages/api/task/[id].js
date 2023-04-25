import Task from "../../../models/Task";
import dbConnect from "../../../utils/dbConnect";

export default async (req, res) => {
	const { method } = req;
	//destructure req.query to get id prop
	const { id } = req.query;

	// Connect to database
	await dbConnect();

	if (method === "PUT") { //first find task by id and then return newly updated task 
		try {
			const result = await Task.findByIdAndUpdate(
				id,
				{ $set: req.body },
				{ new: true }
			);

			res
				.status(200)
				.json({ data: result, message: "Task Updated Successfully" });
		} catch (error) {
			res.status(500).json({ message: "Internal Server Error" });
			console.log(error);
		}
	}

	if (method === "DELETE") {//first find task by id and then delte the task
		try {
			await Task.findByIdAndDelete(id);
			res.status(200).json({ message: "Task Deleted Successfully" });
		} catch (error) {
			res.status(500).json({ message: "Internal Server Error" });
			console.log(error);
		}
	}
};
