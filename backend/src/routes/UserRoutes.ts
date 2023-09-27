import { Router } from 'express';
import {
	createUser,
	getAllUsers,
	getUser,
} from '../controllers/UserController';
import catchAsyncError from '../utilities/catchAsyncError';
import isSignedIn from '../middlewares/isSignedIn';

const router = Router();

router.get('/', catchAsyncError(getAllUsers));
router.post('/', isSignedIn, catchAsyncError(createUser));

router.get('/:userId', isSignedIn, catchAsyncError(getUser));

export default router;
