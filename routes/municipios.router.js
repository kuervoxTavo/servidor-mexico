import { Router } from "express";
import { getMunicipios } from "../controller/municipios.controller.js";


const router = Router();

router.get("/:id",getMunicipios );

export default router;
