import { Router } from "express";
import * as controller from '../controllers/address';

const router = Router();

router.get('/', controller.getAddresses);
router.post('/', controller.create);
router.put('/:cep', controller.update);

export default router;
