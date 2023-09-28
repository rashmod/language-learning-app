import { Request, Response } from 'express';

import { prisma } from '../db/prisma';
import { CustomError, NotFoundError } from '../utilities/Errors';
import { comparePassword } from '../utilities/passwordUtilities';

// @desc sign in user
// @route POST /api/auth/signIn
// @access public
export const signInUser = async (req: Request, res: Response) => {
	const { email, password } = req.body;

	const user = await prisma.user.findUnique({ where: { email } });

	if (!user) {
		throw new CustomError(
			'The provided email or password is incorrect. Please check your credentials and try again.',
			401,
			'InvalidCredentials'
		);
	}

	// const isPasswordMatch = await comparePassword(
	// 	password,
	// 	user.hashedPassword
	// );
	const isPasswordMatch = password === user.hashedPassword;

	if (!isPasswordMatch) {
		throw new CustomError(
			'The provided email or password is incorrect. Please check your credentials and try again.',
			401,
			'InvalidCredentials'
		);
	}

	req.session.user = user;

	res.status(200).json({ success: true, data: user });
};

// @desc sign out user
// @route GET /api/auth/signOut
// @access public
export const signOutUser = async (req: Request, res: Response) => {
	req.session.destroy((err) => {
		if (err) {
			throw new CustomError(
				'An error occurred while attempting to logout'
			);
		} else {
			res.status(200).json({ success: true });
		}
	});
};
