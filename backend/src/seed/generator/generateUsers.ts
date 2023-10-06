import { faker } from '@faker-js/faker';
import { prisma } from '../../db/prisma';
import randomNumberInRange from '../utilities/randomNumberInRange';
import generateUserLanguages from './generateUserLanguages';
import { hashPassword } from '../../utilities/passwordUtilities';

const generateUsers = async (count: number) => {
	for (let i = 0; i < count; i++) {
		await generateUser();
	}
};

const generateUser = async () => {
	// const email = 'test@test.com';
	// const username = 'test';
	// const hashedPassword = await hashPassword('test');

	const email = faker.internet.email();
	const username = faker.internet.userName();
	const hashedPassword = await hashPassword(username);

	const user = await prisma.user.create({
		data: { email, username, hashedPassword },
	});

	console.log(`created user: ${user.username} ${user.email}`);

	const languageCount = randomNumberInRange(5, 2);
	await generateUserLanguages(languageCount, user.userId);
};

export default generateUsers;
