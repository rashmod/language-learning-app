import { Router } from 'express';
import {
	createQuestion,
	getAllQuestions,
	getQuestion,
} from '../controllers/QuestionControllers';
import catchAsyncError from '../utilities/catchAsyncError';
import isSignedIn from '../middlewares/isSignedIn';

// get the testId from app.use
const router = Router({ mergeParams: true });

router.get('/', isSignedIn, catchAsyncError(getAllQuestions));
router.post('/', isSignedIn, catchAsyncError(createQuestion));

router.get('/:questionId', isSignedIn, catchAsyncError(getQuestion));

export default router;
