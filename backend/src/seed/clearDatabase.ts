import { prisma } from '../db/prisma';

const clearDatabase = async () => {
	await prisma.option.deleteMany();
	console.log('deleted all options');
	await prisma.question.deleteMany();
	console.log('deleted all questions');
	await prisma.testResult.deleteMany();
	console.log('deleted all test results');
	await prisma.test.deleteMany();
	console.log('deleted all tests');
	await prisma.userLanguage.deleteMany();
	console.log('deleted all user languages');
	await prisma.language.deleteMany();
	console.log('deleted all languages');
	await prisma.user.deleteMany();
	console.log('deleted all users');
};

export default clearDatabase;
