import { Request, Response } from 'express';

import { prisma } from '../db/prisma';
import { NotFoundError } from '../utilities/Errors';

// @desc Get all options of a question
// @route GET /api/languages/:languageId/tests/:testId/questions/:questionId/options
// @access user
export const getAllOptions = async (req: Request, res: Response) => {
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
		where: { questionId },
	});

	if (!question)
		throw new NotFoundError('The requested question was not found');

	const options = await prisma.option.findMany({ where: { questionId } });

	res.status(200).json({
		success: true,
		count: options.length,
		data: options,
	});
};

// @desc Create option
// @route POST /api/languages/:languageId/tests/:testId/questions/:questionId/options
// @access admin
export const createOption = async (req: Request, res: Response) => {
	const { languageId, testId, questionId } = req.params;
	const { optionText, isCorrect } = req.body;

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
		where: { questionId },
	});

	if (!question)
		throw new NotFoundError('The requested question was not found');

	const option = await prisma.option.create({
		data: { optionText, isCorrect, question: { connect: { questionId } } },
	});

	res.status(200).json({ success: true, data: option });
};
