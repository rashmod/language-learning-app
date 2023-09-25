import { Request, Response } from 'express';

import { prisma } from '../db/prisma';
import { NotFoundError } from '../utilities/Errors';

// @desc Get all questions of a test
// @route GET /api/languages/:languageId/tests/:testId/questions
// @access user
export const getAllQuestions = async (req: Request, res: Response) => {
	const { languageId, testId } = req.params;

	const language = await prisma.language.findUnique({
		where: { languageId },
	});

	if (!language)
		throw new NotFoundError('The requested language was not found');

	const questions = await prisma.question.findMany({
		where: { testId },
		include: { options: true },
	});

	res.status(200).json({
		success: true,
		count: questions.length,
		data: questions,
	});
};

// @desc Get single question
// @route GET /api/languages/:languageId/tests/:testId/questions/:questionId
// @access user
export const getQuestion = async (req: Request, res: Response) => {
	const { languageId, testId, questionId } = req.params;

	const language = await prisma.language.findUnique({
		where: { languageId },
	});

	if (!language)
		throw new NotFoundError('The requested language was not found');

	const test = await prisma.test.findUnique({
		where: { testId },
	});

	if (!test) throw new NotFoundError('The requested test was not found');

	const question = await prisma.question.findUnique({
		where: {
			questionId,
		},
		include: {
			options: true,
		},
	});

	if (!question)
		throw new NotFoundError('The requested question was not found');

	res.status(200).json({ success: true, data: question });
};

// @desc Create question
// @route POST /api/languages/:languageId/tests/:testId/questions
// @access admin
export const createQuestion = async (req: Request, res: Response) => {
	const { languageId, testId } = req.params;
	const {
		questionText,
		difficulty,
		options,
	}: {
		questionText: string;
		difficulty: number;
		options: { optionText: string; isCorrect: boolean }[];
	} = req.body;

	const language = await prisma.language.findUnique({
		where: { languageId },
	});

	if (!language)
		throw new NotFoundError('The requested language was not found');

	const test = await prisma.test.findUnique({
		where: { testId },
	});

	if (!test) throw new NotFoundError('The requested test was not found');

	const question = await prisma.question.create({
		data: {
			questionText,
			difficulty,
			test: { connect: { testId } },
			options: {
				create: options.map(({ optionText, isCorrect }) => ({
					optionText,
					isCorrect,
				})),
			},
		},
		include: {
			options: true,
		},
	});

	res.status(200).json({ success: true, data: question });
};
