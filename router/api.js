import { Router } from "express"
import userRouter from './user.js'
import proRouter from './pro.js'
import sessionRouter from './session.js'
import methodologieRouter from './methodologie.js'


const router = Router();

router.use('/user', userRouter);
router.use('/pro', proRouter);
router.use('/session', sessionRouter);
router.use('/methodologie', methodologieRouter);
router.use('/medecin/IdentificationnationalePP', proRouter);

export default router;
