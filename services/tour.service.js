const { tourPackage } = require("../models/tour.model");

//get all tour service
exports.getAlltourService = async (queries) => {
  console.log(queries);
  const result = await tourPackage
    .find({})
    .select(queries.fieldBy)
    .skip(queries.skip)
    .sort(queries.sortBy);
  return result;
};

//insert  service

exports.inserttourService = async (newTour) => {
  const newPackage = new tourPackage(newTour);
  const result = await newPackage.save();
  return result;
};
//singleTour details

exports.singleTourDetailsService = async (id) => {
  const result = await tourPackage.findOneAndUpdate(
    { _id: id },
    { $inc: { viewCount: 1 } }
  );
  console.log(result);
  return result;
};
exports.updateTourService = async (id, data) => {
  const result = await tourPackage.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true }
  );

  return result;
};
