const mongoose = require("mongoose");

const tourSchema = mongoose.Schema({
  destination: {
    type: String,
    trim: true,
    required: [true, "Please insert destination name"],
    unique: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price can't be negative"],
  },
  image: {
    type: String,
    default: "No Image",
  },
  day: {
    type: Number,
    required: [true, "Please insert the number of day you want to stay"],
  },
  night: {
    type: Number,
    required: [true, "Please insert the number of night you want to stay"],
  },
  hotel: {
    type: String,
    required: [true, "please insert the hotel name "],
  },
  roomNo: {
    type: Number,
    required: [true, "Room no is required"],
  },
  adults: {
    type: Number,
    min: 1,
  },
  children: {
    type: Number,
    min: 0,
  },
  status: {
    type: String,
    required: true,
    enum: {
      values: ["available", "not-available"],
      message: "Can't be {VALUE}",
    },
  },
});

const tourPackage = mongoose.model("TourMangement", tourSchema);

module.exports = { tourPackage };
