const invModel = require("../models/inventoryModel");
const utilities = require("../utilities");

async function buildByInventoryId(req, res, next) {
  try {
    const inv_id = parseInt(req.params.inv_id);
    const data = await invModel.getInventoryById(inv_id);

    if (!data) {
      return next(); // If no item, pass to 404 handler
    }

    const html = utilities.buildDetailView(data);
    const nav = await utilities.getNav();

    res.render("inventory/detail", {
      title: `${data.inv_make} ${data.inv_model}`,
      nav,
      content: html
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  buildByInventoryId
};
