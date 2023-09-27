import { Request, Response } from 'express';

import { prisma } from '../db/prisma';
import { NotFoundError } from '../utilities/Errors';

// @desc Get all test results of a user of language
// @route GET /api/users/:userId/languages/:languageId/tests/:testId/testResults
// @access user
export const getAllTestResults = async (req: Request, res: Response) => {
	const { userId, languageId, testId } = req.params;

	const user = await prisma.user.findUnique({
		where: { userId },
	});

	if (!user) throw new NotFoundError('The requested user was not found');

	const language = await prisma.language.findUnique({
		where: { languageId },
	});

	if (!language)
		throw new NotFoundError('The requested language was not found');

	const test = await prisma.test.findUnique({
		where: { testId },
	});

	if (!test) throw new NotFoundError('The requested test was not found');

	const testResults = await prisma.testResult.findMany({
		where: { userId, test: { languageId } },
	});

	res.status(200).json({
		success: true,
		count: testResults.length,
		data: testResults,
	});
};

// @desc Create test result
// @route POST /api/users/:userId/languages/:languageId/tests/:testId/testResults
// @access user
export const createTestResult = async (req: Request, res: Response) => {
	const { userId, languageId, testId } = req.params;
	const { score } = req.body;

	const user = await prisma.user.findUnique({
		where: { userId },
	});

	if (!user) throw new NotFoundError('The requested user was not found');

	const language = await prisma.language.findUnique({
		where: { languageId },
	});

	if (!language)
		throw new NotFoundError('The requested language was not found');

	const test = await prisma.test.findUnique({
		where: { testId },
	});

	if (!test) throw new NotFoundError('The requested test was not found');

	const [testResult] = await prisma.$transaction([
		prisma.testResult.create({
			data: {
				score,
				user: { connect: { userId } },
				test: { connect: { testId } },
			},
		}),
		prisma.userLanguage.update({
			where: { userId_languageId: { userId, languageId } },
			data: { score: { increment: score } },
		}),
	]);

	res.status(200).json({ success: true, data: testResult });
};
