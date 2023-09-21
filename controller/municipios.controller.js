/* pool de conexion a la base de datos */
import { pool } from "../db.js";


/* Lista los municipiors */

export const getMunicipios = async (req, res) => {
  try {
    
    const { id } = req.params;

    const [result] = await pool.query(
      `select * from municipios where estado = ? order by nombre`,
      [id]
    );

    if (result.length === 0) return res.sendStatus(404);

    res.json(result);

  } catch (error) {
    res.status(500);
  }
};
