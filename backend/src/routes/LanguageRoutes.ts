import { Router } from 'express';
import {
	createLanguage,
	getAllLanguages,
	getLanguage,
} from '../controllers/LanguageControllers';
import catchAsyncError from '../utilities/catchAsyncError';

const router = Router();

router.get('/', catchAsyncError(getAllLanguages));
router.post('/', catchAsyncError(createLanguage));

router.get('/:languageId', catchAsyncError(getLanguage));

export default router;
