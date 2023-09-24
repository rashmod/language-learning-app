import { Request, Response } from 'express';

import { prisma } from '../db/prisma';

// @desc Get all options of a question
// @route GET /api/questions/:questionId/options
// @access user
export const getAllOptions = async (req: Request, res: Response) => {
	const { questionId } = req.params;

	const options = await prisma.option.findMany({ where: { questionId } });

	res.status(200).json({
		success: true,
		count: options.length,
		data: options,
	});
};

// @desc Create option
// @route POST /api/questions/:questionId/options
// @access admin
export const createOption = async (req: Request, res: Response) => {
	const { questionId } = req.params;
	const { optionText, isCorrect } = req.body;

	const option = await prisma.option.create({
		data: { optionText, isCorrect, question: { connect: { questionId } } },
	});

	res.status(200).json({ success: true, data: option });
};
