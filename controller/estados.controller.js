import { pool } from "../db.js";

// Lista de todos los productos
export const getEstados = async (req, res) => {
  try {
    const [result] = await pool.query(
      `select * from estados order by nombre`
    );

    if (result.length === 0) return res.sendStatus(404);

    res.json(result);
  } catch (error) {
    res.status(500);
  }
};

