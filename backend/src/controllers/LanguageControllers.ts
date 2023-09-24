import { Request, Response } from 'express';

import { prisma } from '../db/prisma';
import { DuplicateResourceError, NotFoundError } from '../utilities/Errors';

// @desc Get all languages
// @route GET /api/languages
// @access public
export const getAllLanguages = async (req: Request, res: Response) => {
	const languages = await prisma.language.findMany();

	res.status(200).json({
		success: true,
		count: languages.length,
		data: languages,
	});
};

// @desc Get single language
// @route GET /api/languages/:id
// @access language
export const getLanguage = async (req: Request, res: Response) => {
	const { languageId } = req.params;
	const language = await prisma.language.findUnique({
		where: {
			languageId,
		},
	});

	if (!language)
		throw new NotFoundError('The requested language was not found');

	res.status(200).json({ success: true, data: language });
};

// @desc Create language
// @route POST /api/languages
// @access public
export const createLanguage = async (req: Request, res: Response) => {
	const { languageName } = req.body;

	const languageExists = await prisma.language.findFirst({
		where: { languageName },
	});

	if (languageExists)
		throw new DuplicateResourceError(
			'A language with this name already exists. Please choose different name.'
		);

	const language = await prisma.language.create({
		data: { languageName },
	});

	res.status(200).json({ success: true, data: language });
};
