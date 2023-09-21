/* Servidor cueva del encanto */

import express from "express";
import cors from "cors";

/* Importa las rutas */
import estadosRutas from "./routes/estados.router.js";
import municipiosRutas from "./routes/municipios.router.js";
import coloniasRutas from "./routes/colonias.router.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/estados", estadosRutas);
app.use("/api/municipios", municipiosRutas);
app.use("/api/colonias", coloniasRutas);

app.use((req, res, next) => {
  res.status(404).json({ msj: "no existe direccion" });
});

app.listen(3000);
