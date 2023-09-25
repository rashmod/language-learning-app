import { Request, Response } from 'express';

import { prisma } from '../db/prisma';

// @desc Get all test results of a user of language
// @route GET /api/testResults
// @access user
export const getAllTestResults = async (req: Request, res: Response) => {
	const { userId, languageId } = req.body;

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
// @route POST /api/testResults
// @access user
export const createTestResult = async (req: Request, res: Response) => {
	const { userId, testId, score } = req.body;

	const testResult = await prisma.testResult.create({
		data: {
			score,
			user: { connect: { userId } },
			test: { connect: { testId } },
		},
	});

	res.status(200).json({ success: true, data: testResult });
};
