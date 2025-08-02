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


const pool = require("../database/"); // adjust path if needed

async function getNav() {
  try {
    const data = await pool.query("SELECT * FROM public.classification ORDER BY classification_name");
    let nav = "<ul>";
    nav += `<li><a href="/" title="Home page">Home</a></li>`;
    data.rows.forEach(row => {
      nav += `<li><a href="/inventory/type/${row.classification_id}" title="See our ${row.classification_name} vehicles">${row.classification_name}</a></li>`;
    });
    nav += "</ul>";
    return nav;
  } catch (error) {
    throw new Error("Navigation build failed: " + error.message);
  }
}

module.exports = { getNav };

