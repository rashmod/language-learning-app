import { Request, Response } from 'express';

import { prisma } from '../db/prisma';
import { DuplicateEmailError, NotFoundError } from '../utilities/Errors';

// @desc Get all users
// @route GET /api/users
// @access public
export const getAllUsers = async (req: Request, res: Response) => {
	const users = await prisma.user.findMany();

	res.status(200).json({
		success: true,
		count: users.length,
		data: users,
	});
};

// @desc Get single user
// @route GET /api/users/:id
// @access user
export const getUser = async (req: Request, res: Response) => {
	const { userId } = req.params;
	const user = await prisma.user.findUnique({
		where: {
			userId,
		},
	});

	if (!user) throw new NotFoundError('The requested user was not found');

	res.status(200).json({ success: true, data: user });
};

// @desc Create user
// @route POST /api/users
// @access public
export const createUser = async (req: Request, res: Response) => {
	const { username, email, hashedPassword } = req.body;

	const emailExists = await prisma.user.findUnique({ where: { email } });

	if (emailExists) throw new DuplicateEmailError();

	const user = await prisma.user.create({
		data: {
			username,
			email,
			hashedPassword,
		},
	});

	res.status(200).json({ success: true, data: user });
};
