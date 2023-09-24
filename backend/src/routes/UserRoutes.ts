import { Router } from 'express';
import {
	createUser,
	getAllUsers,
	getUser,
} from '../controllers/UserController';
import catchAsyncError from '../utilities/catchAsyncError';

const router = Router();

router.get('/', catchAsyncError(getAllUsers));
router.post('/', catchAsyncError(createUser));

router.get('/:userId', catchAsyncError(getUser));

export default router;
