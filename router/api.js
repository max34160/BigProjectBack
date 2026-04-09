import { Router } from "express"
import userRouter from './user.js'
import sessionRouter from './session.js'

const router = Router();

router.use('/user', userRouter);
router.use('/session', sessionRouter);

export default router;