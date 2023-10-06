import { prisma } from '../db/prisma';

const clearUsers = async () => {
	await prisma.testResult.deleteMany();
	console.log('deleted all test results');
	await prisma.userLanguage.deleteMany();
	console.log('deleted all user languages');
	await prisma.user.deleteMany();
	console.log('deleted all users');
};

export default clearUsers;
