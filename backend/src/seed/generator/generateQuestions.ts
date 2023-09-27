import { prisma } from '../../db/prisma';
import testData from '../data/questionsData';
import getRandomElements from '../utilities/getRandomElements';
import randomNumberInRange from '../utilities/randomNumberInRange';
import generateOptions from './generateOptions';

const convertToValidFormat = (input: any[]) => {
	const result = [];
	for (let i = 0; i < input.length; i++) {
		const question = input[i];
		for (let j = 0; j < question.length; j++) {
			const element = question[j];
			if (j === 0) {
				result.push({
					questionText: element.questionText as string,
					difficulty: element.difficulty as number,
					options: [] as {
						optionText: string;
						isCorrect: boolean;
					}[],
				});
			} else {
				const last = result[result.length - 1];
				last.options.push({
					optionText: element.optionText,
					isCorrect: element.isCorrect,
				});
			}
		}
	}
	return result;
};

const generateQuestions = async (testId: string) => {
	const numberOfQuestions = randomNumberInRange(20, 10);
	const questions = getRandomElements(testData, numberOfQuestions);
	// const validQuestions = convertToValidFormat(questions);

	for (let i = 0; i < questions.length; i++) {
		const question = questions[i];
		await generateQuestion(testId, question);
	}
};

const generateQuestion = async (
	testId: string,
	{
		questionText,
		difficulty,
		options,
	}: {
		questionText: string;
		difficulty: number;
		options: { optionText: string; isCorrect: boolean }[];
	}
) => {
	const [question] = await prisma.$transaction([
		prisma.question.create({
			data: { questionText, difficulty, test: { connect: { testId } } },
		}),
		prisma.test.update({
			where: { testId },
			data: { maxScore: { increment: difficulty } },
		}),
	]);
	// console.log(`created question: ${question.questionText}`);
	await generateOptions(question.questionId, options);
};

export default generateQuestions;
