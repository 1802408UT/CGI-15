import {Router} from 'express'
import { createProduct, getByIDProduct, getProduct, updateProduct, deleteProduct} from '../controllers/invetario.controllers';

const router = Router()

router.post('/inventario', createProduct);
router.get('/inventario', getProduct);
router.get('/inventario/:id', getByIDProduct);
router.put('/inventario/:id', updateProduct);
router.delete('/inventario/:id', deleteProduct);

export default router;