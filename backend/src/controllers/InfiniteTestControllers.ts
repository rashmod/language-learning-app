import { Request, Response } from 'express';

import { prisma } from '../db/prisma';
import { NotFoundError } from '../utilities/Errors';
import getRandomElements from '../seed/utilities/getRandomElements';

// @desc Get infinite questions of language
// @route GET /api/users/:userId/languages/:languageId/tests/infinite
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

// @desc Add infinite question results
// @route POST /api/users/:userId/languages/:languageId/tests/infinite
// @access user
export const addInfiniteQuestionResult = async (
	req: Request,
	res: Response
) => {
	const { userId, languageId } = req.params;
	const { score }: { score: number } = req.body;

	const user = await prisma.user.findUnique({
		where: { userId },
	});

	if (!user) throw new NotFoundError('The requested user was not found');

	const language = await prisma.language.findUnique({
		where: { languageId },
	});

	if (!language)
		throw new NotFoundError('The requested language was not found');

	const userLanguage = await prisma.userLanguage.update({
		where: { userId_languageId: { userId, languageId } },
		data: {
			score: { increment: score },
			proficiencyLevel: { increment: score },
		},
	});

	res.status(200).json({
		success: true,
		data: userLanguage,
	});
};
