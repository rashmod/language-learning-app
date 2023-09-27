import { prisma } from '../../db/prisma';
import getRandomElements from '../utilities/getRandomElements';
import randomNumberInRange from '../utilities/randomNumberInRange';

const generateTestResults = async (
	count: number,
	userId: string,
	languageId: string
) => {
	const tests = await prisma.test.findMany({ where: { languageId } });
	const chosenTests = getRandomElements(tests, count);

	for (let i = 0; i < chosenTests.length; i++) {
		const element = chosenTests[i];
		await generateTestResult(
			userId,
			element.testId,
			element.languageId as string
		);
		console.log(`created test result for: ${element.testName}`);
	}
};

const generateTestResult = async (
	userId: string,
	testId: string,
	languageId: string
) => {
	const questions = await prisma.question.findMany({ where: { testId } });
	const correctQuestionCount = randomNumberInRange(
		questions.length,
		Math.floor(questions.length / 2)
	);
	const chosenQuestions = getRandomElements(questions, correctQuestionCount);
	const score = chosenQuestions.reduce(
		(acc, curr) => acc + curr.difficulty,
		0
	);

	console.log(`score: ${score}`);

	await prisma.$transaction([
		prisma.testResult.create({ data: { score, testId, userId } }),
		prisma.userLanguage.update({
			where: { userId_languageId: { userId, languageId } },
			data: {
				proficiencyLevel: { increment: score },
				score: { increment: score },
			},
		}),
	]);
};

export default generateTestResults;
