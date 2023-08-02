import {Router} from 'express'
import { createUser, deleteUser, getByUser, getUser, updateUser } from '../controllers/user.controllers';

const router = Router()

router.post('/users', createUser);
router.get('/users', getUser);
router.get('/users/:id', getByUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;