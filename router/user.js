import { Router } from "express";
import * as userCtrl from '../controller/user.js';

const router = Router();

router.get('/', userCtrl.getAll);
router.get('/:id', userCtrl.getOne);
router.post('/', userCtrl.create);
router.put('/:id', userCtrl.update);
router.delete('/:id', userCtrl.remove);

export default router;