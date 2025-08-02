const pool = require("../database");

// getNav
async function getNav() {
  try {
    const data = await pool.query("SELECT * FROM classification ORDER BY classification_name");
    console.log("NAV DATA:", data.rows);
    let nav = `<li><a href="/">Home</a></li>`;
    data.rows.forEach(row => {
      nav += `<li><a href="/inventory/type/${row.classification_id}">${row.classification_name}</a></li>`;
    });
    return nav;
  } catch (err) {
    console.error("Error building navigation:", err);
    return `<li><a href="/">Home</a></li>`;
  }
}

// buildVehicleDetail
function buildVehicleDetail(vehicle) {
  const formatter = new Intl.NumberFormat("en-US");
  const price = formatter.format(vehicle.inv_price);
  const miles = formatter.format(vehicle.inv_miles);

  return `
    <div class="vehicle-detail">
      <img src="${vehicle.inv_image}" alt="Image of ${vehicle.inv_make} ${vehicle.inv_model}">
      <div class="vehicle-info">
        <h2>${vehicle.inv_year} ${vehicle.inv_make} ${vehicle.inv_model}</h2>
        <p><strong>Price:</strong> $${price}</p>
        <p><strong>Mileage:</strong> ${miles} miles</p>
        <p><strong>Description:</strong> ${vehicle.inv_description}</p>
        <p><strong>Color:</strong> ${vehicle.inv_color}</p>
      </div>
    </div>
  `;
}

// Export everything cleanly
module.exports = {
  getNav,
  buildVehicleDetail,
};


// Is this necessary, will research more on it
function buildDetailView(vehicle) {
  const formatter = new Intl.NumberFormat("en-US");

  const price = formatter.format(vehicle.inv_price);
  const miles = formatter.format(vehicle.inv_miles);

  return `
    <div class="vehicle-detail">
      <img src="${vehicle.inv_image}" alt="Image of ${vehicle.inv_make} ${vehicle.inv_model}">
      <div class="vehicle-info">
        <h2>${vehicle.inv_year} ${vehicle.inv_make} ${vehicle.inv_model}</h2>
        <p><strong>Price:</strong> $${price}</p>
        <p><strong>Mileage:</strong> ${miles} miles</p>
        <p><strong>Description:</strong> ${vehicle.inv_description}</p>
        <p><strong>Color:</strong> ${vehicle.inv_color}</p>
      </div>
    </div>
  `;
}

module.exports = {
  getNav,
  buildDetailView
};

