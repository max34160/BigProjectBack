import { Router } from "express"
import userRouter from './user.js'
import sessionRouter from './session.js'
import methodologieRouter from './methodologie.js'

const router = Router();

router.use('/user', userRouter);
router.use('/session', sessionRouter);
router.use('/methodologie', methodologieRouter);

export default router;