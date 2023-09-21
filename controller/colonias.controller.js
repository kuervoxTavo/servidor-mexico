import { pool } from "../db.js";

// Lista de todos los productos
export const getColonias = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await pool.query(
      `select * from colonias where municipio = ? order by nombre`,
      [id]
    );

    if (result.length === 0) return res.sendStatus(404);

    res.json(result);
  } catch (error) {
    res.status(500);
  }
};
