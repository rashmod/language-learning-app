import { Router } from 'express';
import {
	createUser,
	getAllUsers,
	getLeaderBoard,
	getUser,
	updatePassword,
	updateUsername,
} from '../controllers/UserController';
import catchAsyncError from '../utilities/catchAsyncError';
import isSignedIn from '../middlewares/isSignedIn';

const router = Router();

router.get('/', catchAsyncError(getAllUsers));
router.post('/', catchAsyncError(createUser));

router.get('/leaderBoard', catchAsyncError(getLeaderBoard));
router.get('/:userId', isSignedIn, catchAsyncError(getUser));
router.patch('/:userId/username', isSignedIn, catchAsyncError(updateUsername));
router.patch('/:userId/password', isSignedIn, catchAsyncError(updatePassword));

export default router;
