import { Request, Response } from 'express';

import { prisma } from '../db/prisma';
import { NotFoundError } from '../utilities/Errors';

// @desc Get user languages
// @route GET /api/users/:userId/languages
// @access user
export const getUserLanguages = async (req: Request, res: Response) => {
	const { userId } = req.params;
	const user = await prisma.user.findUnique({
		where: {
			userId,
		},
		include: { languages: true, testResults: true },
	});

	if (!user) throw new NotFoundError('The requested user was not found');

	const userLanguages = await prisma.userLanguage.findMany({
		where: { userId },
	});

	res.status(200).json({
		success: true,
		count: userLanguages.length,
		data: userLanguages,
	});
};

// @desc Create user language
// @route POST /api/users/:userId/languages/:languageId
// @access user
export const addUserLanguage = async (req: Request, res: Response) => {
	const { userId, languageId } = req.params;

	const user = await prisma.user.findUnique({
		where: {
			userId,
		},
	});

	if (!user) throw new NotFoundError('The requested user was not found');

	const language = await prisma.language.findUnique({
		where: {
			languageId,
		},
	});

	if (!language)
		throw new NotFoundError('The requested language was not found');

	await prisma.userLanguage.create({
		data: { languageId, userId },
	});

	res.status(200).json({ success: true, data: user });
};
