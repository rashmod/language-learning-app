import { Request, Response } from 'express';

import { prisma } from '../db/prisma';

// @desc Get all users
// @route GET /api/users
// @access public
export const getAllUsers = async (req: Request, res: Response) => {
	try {
		const users = await prisma.user.findMany();

		res.status(200).json({
			success: true,
			count: users.length,
			data: users,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to get all users' });
	}
};

// @desc Get single user
// @route GET /api/users/:id
// @access user
export const getUser = async (req: Request, res: Response) => {
	try {
		const { userId } = req.params;
		const user = await prisma.user.findUnique({
			where: {
				userId,
			},
		});

		if (!user) return res.status(404).json({ error: 'Failed to get user' });

		res.status(200).json({ success: true, data: user });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to get user' });
	}
};

// @desc Create user
// @route POST /api/users
// @access public
export const createUser = async (req: Request, res: Response) => {
	try {
		console.log(req.body);
		const { username, email, hashedPassword } = req.body;

		const user = await prisma.user.create({
			data: {
				username,
				email,
				hashedPassword,
			},
		});

		res.status(200).json({ success: true, data: user });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to create user' });
	}
};
