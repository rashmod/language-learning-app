import express from 'express';

import catchAsyncError from '../utilities/catchAsyncError';
import { signInUser, signOutUser } from '../controllers/AuthControllers';

const router = express.Router();

router.post('/signIn', catchAsyncError(signInUser));
router.get('/signOut', catchAsyncError(signOutUser));

export default router;
