const mongoose = require("mongoose");
exports.DBConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("database connected".red.bold);
    })
    .catch((err) => {
      console.log({ error: err.message });
    });
};
