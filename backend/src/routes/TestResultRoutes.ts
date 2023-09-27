import { Router } from 'express';
import {
	createTestResult,
	getAllTestResults,
} from '../controllers/TestResultControllers';
import catchAsyncError from '../utilities/catchAsyncError';
import isSignedIn from '../middlewares/isSignedIn';

// get the questionId from app.use
const router = Router({ mergeParams: true });

router.get('/', isSignedIn, catchAsyncError(getAllTestResults));
router.post('/', isSignedIn, catchAsyncError(createTestResult));

export default router;
