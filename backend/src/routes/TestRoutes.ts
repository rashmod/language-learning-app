import { Router } from 'express';
import {
	createTest,
	getAllTests,
	getTest,
} from '../controllers/Testcontrollers';
import catchAsyncError from '../utilities/catchAsyncError';

// get the languageId from app.use
const router = Router({ mergeParams: true });

router.get('/', catchAsyncError(getAllTests));
router.post('/', catchAsyncError(createTest));

router.get('/:testId', catchAsyncError(getTest));

export default router;
