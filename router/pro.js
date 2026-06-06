import { Router } from "express";
import { getMedecins } from "../controller/apiController.js";
import * as proCtrl from '../controller/pro.js';
import { getMedecins } from "../controller/apiController.js";
const router = Router();


router.get('/:id', proCtrl.getOne);
router.post('/', proCtrl.create);
router.get("/opendata", getMedecins);
router.post("/verify", proCtrl.verify);
router.post("/register", proCtrl.register);


export default router;