import { Router } from "express";
import { getEstados } from "../controller/estados.controller.js";


const router = Router();

router.get("/", getEstados);



export default router;