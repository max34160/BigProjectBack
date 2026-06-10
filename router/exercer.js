import { Router } from "express";
import * as exercerCtrl from '../controller/exercer.js';

const router = Router();


router.get('/:id_pro/:id_methodo', exercerCtrl.getOneByProAndMethodo);
router.get('/:id_pro', exercerCtrl.getOneByPro);
router.put('/update/:id_pro/:id_methodologie', exercerCtrl.update);
router.post('/', exercerCtrl.create);


export default router;