import {Router} from 'express'
import { createProduct, getByIDProduct, getProduct, updateProduct, deleteProduct} from '../controllers/invetario.controllers';

const router = Router()

router.post('/', createProduct);
router.get('/', getProduct);
router.get('/:id', getByIDProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;