const express = require("express");
const cors = require("cors");
const path = require("path"); // Import the path module

const userRouter = require("./Api/Routers/userRouter");
const tokenRouter = require("./Api/Routers/tokenRouter");
const accountRouter = require("./Api/Routers/accountRouter");

// MIDDLEWARE
const app = express();
app.use(express.json({ limit: "100kb" }));

app.use(cors());
app.options("*", cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Define an endpoint that serves popup.html
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "popup.html"));
});

// ROUTES
app.use("/api/v1/user", userRouter);
app.use("/api/v1/tokens", tokenRouter);
app.use("/api/v1/account", accountRouter);

module.exports = app;
