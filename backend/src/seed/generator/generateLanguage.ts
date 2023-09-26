import { prisma } from '../../db/prisma';
import languageData from '../data/languageData';
import getRandomElements from '../utilities/getRandomElements';
import randomNumberInRange from '../utilities/randomNumberInRange';
import generateQuestions from './generateQuestions';
import generateTest from './generateTest';

const generateLanguage = async () => {
	const language: string = getRandomElements(languageData, 1)[0];
	const tests = [];
	const rounds = randomNumberInRange(10, 5);

	for (let index = 0; index < rounds; index++) {
		tests.push(generateTest(index));
	}

	await prisma.language.create({
		data: {
			languageName: language,
			tests: {
				create: tests,
			},
		},
	});
};

export default generateLanguage;
