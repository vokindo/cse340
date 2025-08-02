function buildVehicleDetail(vehicle) {
  const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(vehicle.inv_price);
  const formattedMiles = new Intl.NumberFormat('en-US').format(vehicle.inv_miles);

  return `
    <div class="vehicle-detail">
      <img src="${vehicle.inv_image}" alt="Image of ${vehicle.inv_make} ${vehicle.inv_model}" />
      <div class="vehicle-info">
        <h2>${vehicle.inv_year} ${vehicle.inv_make} ${vehicle.inv_model}</h2>
        <p><strong>Price:</strong> ${formattedPrice}</p>
        <p><strong>Miles:</strong> ${formattedMiles}</p>
        <p><strong>Color:</strong> ${vehicle.inv_color}</p>
        <p><strong>Description:</strong> ${vehicle.inv_description}</p>
      </div>
    </div>
  `;
}

module.exports = {
  buildVehicleDetail,
  getNav
};


const pool = require("../database/"); // adjust if needed

async function getNav() {
  try {
    const data = await pool.query("SELECT * FROM public.classification ORDER BY classification_name");
    let nav = "";
    data.rows.forEach(row => {
      nav += `<li><a href="/inventory/type/${row.classification_id}">${row.classification_name}</a></li>`;
    });
    return nav;
  } catch (err) {
    console.error("getNav error:", err);
    return "<li><a href='/'>Home</a></li>"; // fallback
  }
}



module.exports = { getNav };

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

