const express = require("express");
const {
  getAllTours,
  insertTour,
  getSignleTour,
  updateTour,
  trendingTourPackage,
  getCheapestPackage,
} = require("../controllers/tour.controllers");
const router = express.Router();

router.get("/all-tour", getAllTours);
router.post("/insert-tour", insertTour);
router.get("/trending", trendingTourPackage);
router.get("/cheapest", getCheapestPackage);
router.route("/:id").get(getSignleTour).patch(updateTour);

module.exports = { router };
