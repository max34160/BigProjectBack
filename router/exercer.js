import { Router } from "express";
import * as exercerCtrl from '../controller/exercer.js';

const router = Router();

router.get('/:id_pro/:id_methodo', exercerCtrl.getOneByProAndMethodo);
router.get('/:id_pro', exercerCtrl.getOneByPro);
router.post('/', exercerCtrl.create);
router.delete('/:id_pro/:id_methodo', exercerCtrl.remove);
router.put('/update/:id_pro', exercerCtrl.update);

export default router;
