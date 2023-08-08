import {Router} from 'express'
import { createProyecto, deleteProyecto, getByProyecto, getProyecto, updateProyecto} from '../controllers/proyecto.controller';

const router = Router()

router.post('/', createProyecto);
router.get('/', getProyecto);
router.get('/:id', getByProyecto);
router.put('/:id', updateProyecto);
router.delete('/:id', deleteProyecto);

export default router;