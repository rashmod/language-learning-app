import { Router } from 'express';
import {
	createUser,
	getAllUsers,
	getUser,
} from '../controllers/UserController';

const router = Router();

router.get('/', getAllUsers);
router.post('/', createUser);

router.get('/:userId', getUser);

export default router;
