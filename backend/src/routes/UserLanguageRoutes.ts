import { Router } from 'express';
import {
	addUserLanguage,
	getUserLanguages,
} from '../controllers/UserLanguageControllers';
import catchAsyncError from '../utilities/catchAsyncError';
import isSignedIn from '../middlewares/isSignedIn';

const router = Router({ mergeParams: true });

router.get('/', isSignedIn, catchAsyncError(getUserLanguages));

router.post('/:languageId', isSignedIn, catchAsyncError(addUserLanguage));

export default router;
