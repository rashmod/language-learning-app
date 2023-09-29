import { Router } from 'express';
import {
	createUser,
	getAllUsers,
	getLeaderBoard,
	getUser,
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

export default router;
