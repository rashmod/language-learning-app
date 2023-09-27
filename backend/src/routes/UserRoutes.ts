import { Router } from 'express';
import {
	createUser,
	getAllUsers,
	getLeaderBoard,
	getUser,
} from '../controllers/UserController';
import catchAsyncError from '../utilities/catchAsyncError';
import isSignedIn from '../middlewares/isSignedIn';

const router = Router();

router.get('/', catchAsyncError(getAllUsers));
router.post('/', catchAsyncError(createUser));

router.get('/leaderBoard', catchAsyncError(getLeaderBoard));
router.get('/:userId', isSignedIn, catchAsyncError(getUser));

export default router;
