import { Router } from "express";
import * as controller from '../controllers/address';

const router = Router();

router.get('/', controller.getAddresses);
router.post('/', controller.create);

export default router;
