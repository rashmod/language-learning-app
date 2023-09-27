import { Router } from 'express';
import {
	createLanguage,
	getAllLanguages,
	getLanguage,
} from '../controllers/LanguageControllers';
import catchAsyncError from '../utilities/catchAsyncError';
import isSignedIn from '../middlewares/isSignedIn';

const router = Router();

router.get('/', catchAsyncError(getAllLanguages));
router.post('/', isSignedIn, catchAsyncError(createLanguage));

router.get('/:languageId', isSignedIn, catchAsyncError(getLanguage));

export default router;
