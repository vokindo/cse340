const pool = require("../database/");

async function getInventoryById(inv_id) {
  try {
    const result = await pool.query(
      "SELECT * FROM public.inventory WHERE inv_id = $1",
      [inv_id]
    );
    return result.rows[0];
  } catch (error) {
    console.error("getInventoryById error:", error);
    throw error;
  }
}

module.exports = { getInventoryById };
