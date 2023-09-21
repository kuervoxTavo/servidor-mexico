import { Router } from "express";
import { getColonias } from "../controller/colonias.controller.js";

const router = Router();

router.get("/:id", getColonias);

export default router;
