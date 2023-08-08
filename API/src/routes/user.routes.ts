import {Router} from 'express'
import { createUser, deleteUser, getByUser, getUser, updateUser } from '../controllers/user.controllers';

const router = Router()

router.post('/', createUser);
router.get('/', getUser);
router.get('/:id', getByUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;