import { Router } from "express";
import * as proCtrl from '../controller/pro.js';

const router = Router();


router.get('/:id', proCtrl.getOne);
router.post('/', proCtrl.create);

export default router;