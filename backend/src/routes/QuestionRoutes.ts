import { Router } from 'express';
import {
	createQuestion,
	getAllQuestions,
	getQuestion,
} from '../controllers/QuestionControllers';
import catchAsyncError from '../utilities/catchAsyncError';

// get the languageId and testId from app.use
const router = Router({ mergeParams: true });

router.get('/', catchAsyncError(getAllQuestions));
router.post('/', catchAsyncError(createQuestion));

router.get('/:questionId', catchAsyncError(getQuestion));

export default router;
