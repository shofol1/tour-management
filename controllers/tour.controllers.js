const { tourPackage } = require("../models/tour.model");
const {
  inserttourService,
  getAlltourService,
  singleTourDetailsService,
  updateTourService,
} = require("../services/tour.service");

exports.getAllTours = async (req, res, next) => {
  try {
    const filters = { ...req.query };
    const excludeField = ["sort", "limit", "page"];
    excludeField.forEach((field) => delete filters[field]);
    const queries = {};
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      queries.fieldBy = fields;
    }

    //pagination
    const { page = 1, limit = 10 } = req.query;
    if (req.query.page) {
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);
    }
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }
    const result = await getAlltourService(queries);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
};
exports.insertTour = async (req, res, next) => {
  try {
    const result = await inserttourService(req.body);
    res
      .status(200)
      .json({ data: result, message: "data inserted successfully" });
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
};

exports.getSignleTour = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await singleTourDetailsService(id);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
};
exports.updateTour = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await updateTourService(id, req.body);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
};

exports.trendingTourPackage = async (req, res, next) => {
  try {
    const result = await tourPackage.find({}).sort({ viewCount: -1 }).limit(3);

    res.status(200).json({ data: result });
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
};
exports.getCheapestPackage = async (req, res, next) => {
  try {
    const result = await tourPackage.find({}).sort({ viewCount: 1 }).limit(1);

    res.status(200).json({ data: result });
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
};
