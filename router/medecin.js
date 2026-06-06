import express from "express";
import { getMedecins } from "../controller/apiController.js";
import * as medecinCtrl from "../controller/medecin.js";

const router = express.Router();

router.get("/", getMedecins);
router.post("/verify", medecinCtrl.verify);
router.post("/register", medecinCtrl.register);
router.get("/:id_user", medecinCtrl.getProfil);

export default router;
