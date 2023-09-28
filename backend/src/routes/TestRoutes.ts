import { Router } from 'express';
import {
	createTest,
	getAllTests,
	getInfiniteQuestions,
	getTest,
} from '../controllers/TestControllers';
import catchAsyncError from '../utilities/catchAsyncError';
import isSignedIn from '../middlewares/isSignedIn';

// get the languageId from app.use
const router = Router({ mergeParams: true });

router.get('/', isSignedIn, catchAsyncError(getAllTests));
router.post('/', isSignedIn, catchAsyncError(createTest));

router.get('/infinite', isSignedIn, catchAsyncError(getInfiniteQuestions));
router.get('/:testId', isSignedIn, catchAsyncError(getTest));

export default router;
