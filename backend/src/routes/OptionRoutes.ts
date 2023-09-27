import { Router } from 'express';
import { createOption, getAllOptions } from '../controllers/OptionControllers';
import catchAsyncError from '../utilities/catchAsyncError';
import isSignedIn from '../middlewares/isSignedIn';

const router = Router({ mergeParams: true });

router.get('/', isSignedIn, catchAsyncError(getAllOptions));
router.post('/', isSignedIn, catchAsyncError(createOption));

export default router;
