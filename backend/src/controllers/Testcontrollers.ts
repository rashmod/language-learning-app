import { Request, Response } from 'express';

import { prisma } from '../db/prisma';
import { DuplicateResourceError, NotFoundError } from '../utilities/Errors';
import getRandomElements from '../seed/utilities/getRandomElements';

// @desc Get all tests of a language
// @route GET /api/languages/:languageId/tests
// @access user
export const getAllTests = async (req: Request, res: Response) => {
	const { languageId } = req.params;

	const language = await prisma.language.findUnique({
		where: { languageId },
	});

	if (!language)
		throw new NotFoundError('The requested language was not found');

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

	const language = await prisma.language.findUnique({
		where: { languageId },
	});

	if (!language)
		throw new NotFoundError('The requested language was not found');

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
	const { testName } = req.body;

	const language = await prisma.language.findUnique({
		where: { languageId },
	});

	if (!language)
		throw new NotFoundError('The requested language was not found');

	const testExists = await prisma.test.findFirst({
		where: { languageId, testName },
	});

	if (testExists)
		throw new DuplicateResourceError(
			'A test with this name already exists. Please choose different name.'
		);

	const test = await prisma.test.create({
		data: { testName, Language: { connect: { languageId } } },
	});

	res.status(200).json({ success: true, data: test });
};

// @desc Get infinite questions of language
// @route POST /api/languages/:languageId/tests/infinite
// @access user
export const getInfiniteQuestions = async (req: Request, res: Response) => {
	const { languageId } = req.params;
	const { scoreAchieved, maxScorePossible, questionBatchSize } = req.query;

	const numberScoreAchieved = Number(scoreAchieved);
	const numberMaxScorePossible = Number(maxScorePossible);
	const numberQuestionBatchSize = Number(questionBatchSize);

	const language = await prisma.language.findUnique({
		where: { languageId },
	});

	if (!language)
		throw new NotFoundError('The requested language was not found');

	const percentage = Number(
		((numberScoreAchieved / numberMaxScorePossible) * 100).toFixed(0)
	);
	const averageScore = Number(
		(numberMaxScorePossible / numberQuestionBatchSize).toFixed(0)
	);
	const easierQuestions = {
		difficulty: 0,
		params: { lte: averageScore },
	} as const;
	const similarQuestions = {
		difficulty: 1,
		params: { lte: averageScore + 1, gte: averageScore - 1 },
	} as const;
	const harderQuestions = {
		difficulty: 2,
		params: { gte: averageScore },
	} as const;
	const difficulty: {
		difficulty: number;
		params: { lte?: number; gte?: number };
	} =
		percentage < 50
			? easierQuestions
			: percentage < 75
			? similarQuestions
			: harderQuestions;

	const questions = await prisma.question.findMany({
		where: { test: { languageId }, difficulty: difficulty.params },
		include: { options: true },
		take: numberQuestionBatchSize * 5,
	});

	questions.splice(
		0,
		questions.length,
		...getRandomElements(questions, numberQuestionBatchSize)
	);

	if (questions.length < numberQuestionBatchSize) {
		const difference = numberQuestionBatchSize - questions.length;
		const res = await prisma.question.findMany({
			where: {
				test: { languageId },
				difficulty: { lte: difficulty.params.gte },
			},
			include: { options: true },
			take: difference * 5,
		});

		res.splice(0, res.length, ...getRandomElements(res, difference));

		questions.push(...res);
	}

	if (questions.length < numberQuestionBatchSize) {
		const difference = numberQuestionBatchSize - questions.length;
		const res = await prisma.question.findMany({
			where: {
				test: { languageId },
				difficulty: { gte: difficulty.params.lte },
			},
			include: { options: true },
			take: difference * 5,
		});

		res.splice(0, res.length, ...getRandomElements(res, difference));

		questions.push(...res);
	}

	res.status(200).json({
		success: true,
		count: questions.length,
		data: questions,
	});
};
