import { prisma } from '../../db/prisma';
import testNames from '../data/testsData';
import generateQuestions from './generateQuestions';

const generateTests = async (languageId: string) => {
	for (let i = 0; i < testNames.length; i++) {
		const testName = testNames[i];
		await generateTest(languageId, testName);
	}
};

const generateTest = async (languageId: string, testName: string) => {
	const test = await prisma.test.create({
		data: { testName, Language: { connect: { languageId } } },
	});
	console.log(`created test: ${test.testName}`);
	await generateQuestions(test.testId);
};

export default generateTests;
