import { Router } from "express"
import userRouter from './user.js'
import proRouter from './pro.js'
import sessionRouter from './session.js'
import methodologieRouter from './methodologie.js'
import medecinRouter from './medecin.js'

const router = Router();

router.use('/user', userRouter);
router.use('/pro', proRouter);
router.use('/session', sessionRouter);
router.use('/methodologie', methodologieRouter);
router.use('/medecin', medecinRouter);
router.use('/medecin/IdentificationnationalePP', medecinRouter);

export default router;

//différentes routes pour tester les fonctionnalités de l'API:

//GET	/api/session/profile pour récupérer l'utilisateur connecté

//GET	/api/user	Liste tous les utilisateur
//GET	/api/user/:id	Un utilisateur par ID
//POST	/api/user	Créer un utilisateur
//PUT	/api/user/:id	Modifier un utilisateur
//DELETE	/api/user/:id Supprimer un utilisateur

//GET	/api/medecin rechercher des médedcins