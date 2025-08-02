const invModel = require("../models/inventoryModel");
const utilities = require("../utilities");

const invController = {};

// Controller for the vehicle detail page
invController.buildDetailView = async function (req, res, next) {
  try {
    const invId = parseInt(req.params.invId);
    const data = await invModel.getVehicleById(invId);

    if (!data) {
      return next(new Error("Vehicle not found"));
    }

    const html = utilities.buildVehicleDetail(data);
    const nav = await utilities.getNav();
    
    res.render("inventory/detail", {
      title: `${data.inv_year} ${data.inv_make} ${data.inv_model}`,
      nav,
      detail: html,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = invController;
