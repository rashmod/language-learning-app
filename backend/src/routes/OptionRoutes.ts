import { Router } from 'express';
import { createOption, getAllOptions } from '../controllers/OptionControllers';
import catchAsyncError from '../utilities/catchAsyncError';

// get the questionId from app.use
const router = Router({ mergeParams: true });

router.get('/', catchAsyncError(getAllOptions));
router.post('/', catchAsyncError(createOption));

export default router;
