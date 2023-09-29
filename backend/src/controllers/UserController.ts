import { Request, Response } from 'express';

import { prisma } from '../db/prisma';
import {
	CustomError,
	DuplicateResourceError,
	NotFoundError,
} from '../utilities/Errors';
import generateLeaderBoard from '../utilities/generateLeaderBoard';
import findUserRank from '../utilities/findUserRank';

// @desc Get all users
// @route GET /api/users
// @access public
export const getAllUsers = async (req: Request, res: Response) => {
	const users = await prisma.user.findMany();

	res.status(200).json({
		success: true,
		count: users.length,
		data: users,
	});
};

// @desc Get user leader board
// @route GET /api/users/leaderBoard?languageId='9999999999999999'
// @access public
export const getLeaderBoard = async (req: Request, res: Response) => {
	const { language } = req.query;

	const users = await prisma.user.findMany({
		select: {
			userId: true,
			username: true,
			languages: {
				select: {
					languageId: true,
					proficiencyLevel: true,
					score: true,
				},
			},
		},
	});

	const leaderBoard = generateLeaderBoard(users, String(language));

	res.status(200).json({
		success: true,
		count: leaderBoard.length,
		data: leaderBoard,
	});
};

// @desc Get single user
// @route GET /api/users/:userId
// @access user
export const getUser = async (req: Request, res: Response) => {
	const { userId } = req.params;
	const user = await prisma.user.findUnique({
		where: {
			userId,
		},
		select: {
			username: true,
			userId: true,
			createdAt: true,
			languages: {
				select: {
					language: {
						select: { languageName: true, languageId: true },
					},
					score: true,
				},
			},
		},
	});

	if (!user) throw new NotFoundError('The requested user was not found');

	const users = await prisma.user.findMany({
		select: {
			userId: true,
			username: true,
			languages: {
				select: {
					languageId: true,
					proficiencyLevel: true,
					score: true,
				},
			},
		},
	});

	const rankedUser = {
		...user,
		languages: [...user.languages].map((lang) => ({ ...lang, rank: 0 })),
	};

	rankedUser.languages.forEach((language) => {
		const languageLeaderBoard = generateLeaderBoard(
			users,
			language.language.languageId
		);
		const userRank = findUserRank(languageLeaderBoard, user.userId);
		language.rank = userRank;
	});

	res.status(200).json({ success: true, data: rankedUser });
};

// @desc Create user
// @route POST /api/users
// @access public
export const createUser = async (req: Request, res: Response) => {
	const { username, email, password } = req.body;

	const emailExists = await prisma.user.findUnique({ where: { email } });

	if (emailExists)
		throw new DuplicateResourceError(
			'A user with this email already exists. Please choose different email address.'
		);

	const language = await prisma.language.findFirst({
		where: { languageName: 'English' },
	});

	if (!language)
		throw new CustomError(
			'Something went wrong when onboarding the user. Please contact support.'
		);

	const hashedPassword = password;

	const user = await prisma.user.create({
		data: {
			username,
			email,
			hashedPassword,
			languages: {
				create: {
					languageId: language.languageId,
					score: 0,
				},
			},
		},
	});

	req.session.user = user;

	res.status(200).json({ success: true, data: user });
};

// @desc Update user username
// @route PATCH /api/users/:userId/username
// @access user
export const updateUsername = async (req: Request, res: Response) => {
	const { userId } = req.params;
	const { username } = req.body;

	const user = await prisma.user.findUnique({ where: { userId } });

	if (!user) throw new NotFoundError('The requested user was not found');

	const updatedUser = await prisma.user.update({
		where: { userId },
		data: { username },
	});

	res.status(200).json({ success: true, data: updatedUser });
};

// @desc Update user password
// @route PATCH /api/users/:userId/password
// @access user
export const updatePassword = async (req: Request, res: Response) => {
	const { userId } = req.params;
	const { oldPassword, newPassword } = req.body;

	const user = await prisma.user.findUnique({ where: { userId } });

	if (!user) {
		throw new NotFoundError('The requested user was not found');
	}

	const isOldPasswordMatch = user.hashedPassword === oldPassword;
	// const isOldPasswordMatch = await comparePassword(
	// 	oldPassword,
	// 	user.hashedPassword
	// );

	if (!isOldPasswordMatch) {
		throw new CustomError(
			'The old password provided does not match the current password associated with this user.',
			401,
			'InvalidCredentials'
		);
	}

	const isNewPasswordSame = oldPassword === newPassword;

	if (isNewPasswordSame) {
		throw new CustomError(
			'The new password cannot be the same as the old password. Please choose a different password.',
			400,
			'PasswordUnchanged'
		);
	}

	// const hashedPassword = await hashPassword(newPassword);

	const updatedUser = await prisma.user.update({
		where: { userId },
		data: { hashedPassword: newPassword },
		select: { email: true, userId: true, username: true },
	});

	res.status(200).json({ success: true, data: updatedUser });
};
