const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");
const { DBConnect } = require("./utils/dbConnect");
const { router } = require("./routes/tour.routes");

// database connection
DBConnect();

app.use("/api/v1/tour", router);

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});
