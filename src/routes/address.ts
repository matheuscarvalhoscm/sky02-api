import { Router } from "express";
import * as controller from '../controllers/address';

const router = Router();

router.get('/', controller.getAddresses);

export default router;
