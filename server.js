require("dotenv").config();
const mongoose = require("mongoose");

const app = require("./app");
const port = 3000;

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("DB connection successful!"))
	.then(() => {
		app.listen(port, () => {
			console.log(`App running on port ${port}....`);
		});
	});
