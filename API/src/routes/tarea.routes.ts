import {Router} from 'express'
import { createTarea, deleteTarea, getByTarea, getTarea, updateTarea} from '../controllers/tarea.controllers';

const router = Router()

router.post('/', createTarea);
router.get('/', getTarea);
router.get('/:id', getByTarea);
router.put('/:id', updateTarea);
router.delete('/:id', deleteTarea);

export default router;