import { Router } from "express";
import { getMedecins } from "../controller/apiController.js";
import * as proCtrl from '../controller/pro.js';

const router = Router();


router.get("/opendata", getMedecins);
router.get("/search", proCtrl.searchByVille);
router.get("/user/:id_user", proCtrl.getByUser);
router.post("/verify", proCtrl.verify);
router.post("/register", proCtrl.register);
router.get('/:id', proCtrl.getOne);
router.post('/', proCtrl.create);
router.put('/:id', proCtrl.update);


export default router;