const pool = require("../database/");

async function getInventoryByClassificationId(classification_id) {
  try {
    const data = await pool.query(
      "SELECT * FROM inventory WHERE classification_id = $1",
      [classification_id]
    );
    return data.rows;
  } catch (error) {
    throw error;
  }
}

async function getInventoryById(inv_id) {
  try {
    const data = await pool.query(
      "SELECT * FROM inventory WHERE inv_id = $1",
      [inv_id]
    );
    return data.rows;
  } catch (error) {
    throw error;
  }
}


module.exports = {
  getInventoryByClassificationId,
  getInventoryById, // <- add this
};
