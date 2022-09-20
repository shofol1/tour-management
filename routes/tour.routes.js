const express = require("express");
const {
  getAllTours,
  insertTour,
  getSignleTour,
  updateTour,
} = require("../controllers/tour.controllers");
const router = express.Router();

router.get("/all-tour", getAllTours);
router.post("/insert-tour", insertTour);
router.route("/:id").get(getSignleTour).patch(updateTour);

module.exports = { router };
