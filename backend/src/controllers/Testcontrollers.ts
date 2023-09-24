import { Request, Response } from 'express';

import { prisma } from '../db/prisma';
import { DuplicateResourceError, NotFoundError } from '../utilities/Errors';

// @desc Get all tests of a language
// @route GET /api/languages/:languageId/tests
// @access user
export const getAllTests = async (req: Request, res: Response) => {
	const { languageId } = req.params;

	const tests = await prisma.test.findMany({ where: { languageId } });

	res.status(200).json({
		success: true,
		count: tests.length,
		data: tests,
	});
};

// @desc Get single test
// @route GET /api/languages/:languageId/tests/:testId
// @access user
export const getTest = async (req: Request, res: Response) => {
	const { testId, languageId } = req.params;

	const test = await prisma.test.findUnique({
		where: {
			testId,
		},
	});

	if (!test) throw new NotFoundError('The requested test was not found');

	res.status(200).json({ success: true, data: test });
};

// @desc Create test
// @route POST /api/languages/:languageId/tests
// @access admin
export const createTest = async (req: Request, res: Response) => {
	const { languageId } = req.params;
	const { testName, maxScore } = req.body;

	const testExists = await prisma.test.findFirst({
		where: { languageId, testName },
	});

	if (testExists)
		throw new DuplicateResourceError(
			'A test with this name already exists. Please choose different name.'
		);

	const test = await prisma.test.create({
		data: { testName, maxScore, Language: { connect: { languageId } } },
	});

	res.status(200).json({ success: true, data: test });
};
