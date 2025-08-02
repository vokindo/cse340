const invModel = require("../models/inventoryModel");
const utilities = require("../utilities/");

async function buildByClassificationId(req, res, next) {
  const classificationId = req.params.classificationId;
  try {
    const data = await invModel.getInventoryByClassificationId(classificationId);
    const grid = utilities.buildClassificationGrid(data);
    const nav = await utilities.getNav();
    const classificationName = data.length > 0 ? data[0].classification_name : "Vehicles";
    res.render("inventory/classification", {
      title: `${classificationName} vehicles`,
      nav,
      grid,
    });
  } catch (error) {
    next(error);
  }
}

async function buildByInventoryId(req, res, next) {
  const invId = req.params.invId;
  try {
    const data = await invModel.getInventoryById(invId);
    const nav = await utilities.getNav();
    const content = utilities.buildVehicleDetail(data[0]);

    res.render("inventory/detail", {
      title: `${data[0].inv_make} ${data[0].inv_model}`,
      nav,
      details,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  buildByClassificationId,
  buildByInventoryId,
};

