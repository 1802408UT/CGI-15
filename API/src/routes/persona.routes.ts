import {Router} from 'express'
import { createPersona, deletePersona, getByPersona, getPersona, updatePersona} from '../controllers/persona.controllers';

const router = Router()

router.post('/', createPersona);
router.get('/', getPersona);
router.get('/:id', getByPersona);
router.put('/:id', updatePersona);
router.delete('/:id', deletePersona);

export default router;