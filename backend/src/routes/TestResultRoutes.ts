import { Router } from 'express';
import {
	createTestResult,
	getAllTestResults,
	getAllTestResultsOfTest,
} from '../controllers/TestResultControllers';
import catchAsyncError from '../utilities/catchAsyncError';
import isSignedIn from '../middlewares/isSignedIn';

const router = Router({ mergeParams: true });

router.get('/testResults', isSignedIn, catchAsyncError(getAllTestResults));

router.get(
	'/tests/:testId/testResults',
	isSignedIn,
	catchAsyncError(getAllTestResultsOfTest)
);

router.post(
	'/tests/:testId/testResults',
	isSignedIn,
	catchAsyncError(createTestResult)
);

export default router;
