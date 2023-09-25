import { Router } from 'express';
import {
	createTestResult,
	getAllTestResults,
} from '../controllers/TestResultControllers';
import catchAsyncError from '../utilities/catchAsyncError';

// get the questionId from app.use
const router = Router({ mergeParams: true });

router.get('/', catchAsyncError(getAllTestResults));
router.post('/', catchAsyncError(createTestResult));

export default router;
