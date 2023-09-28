import { Router } from 'express';

import catchAsyncError from '../utilities/catchAsyncError';
import isSignedIn from '../middlewares/isSignedIn';
import {
	addInfiniteQuestionResult,
	getInfiniteQuestions,
} from '../controllers/InfiniteTestControllers';

const router = Router({ mergeParams: true });

router.get('/', isSignedIn, catchAsyncError(getInfiniteQuestions));
router.post('/', isSignedIn, catchAsyncError(addInfiniteQuestionResult));

export default router;
