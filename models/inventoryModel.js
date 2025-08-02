const pool = require("../database/"); // Adjust this if your DB connection is named differently

async function getVehicleById(invId) {
  try {
    const result = await pool.query(
      "SELECT * FROM inventory WHERE inv_id = $1",
      [invId]
    );
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = { getVehicleById };
