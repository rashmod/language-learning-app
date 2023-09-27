import { prisma } from '../../db/prisma';
import getRandomElements from '../utilities/getRandomElements';
import randomNumberInRange from '../utilities/randomNumberInRange';
import generateTestResults from './generateTestResults';

const generateUserLanguages = async (count: number, userId: string) => {
	const languages = await prisma.language.findMany();
	const chosenLanguages = getRandomElements(languages, count);

	for (let i = 0; i < chosenLanguages.length; i++) {
		const element = chosenLanguages[i];
		await generateUserLanguage(userId, element.languageId);
	}
};

const generateUserLanguage = async (userId: string, languageId: string) => {
	const userLanguage = await prisma.userLanguage.create({
		data: { languageId, userId },
	});

	console.log(`created user language`);

	const testCount = randomNumberInRange(15, 5);
	await generateTestResults(testCount, userId, languageId);
};

export default generateUserLanguages;
