import {Router} from 'express'
import { createEquipo, deleteEquipo, getByEquipo, getEquipo, updateEquipo} from '../controllers/equipo.controllers';

const router = Router()

router.post('/', createEquipo);
router.get('/', getEquipo);
router.get('/:id', getByEquipo);
router.put('/:id', updateEquipo);
router.delete('/:id', deleteEquipo);

export default router;