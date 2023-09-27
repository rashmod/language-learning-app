import { prisma } from '../../db/prisma';
import languageData from '../data/languageData';
import generateTests from './generateTests';

const generateLanguages = async () => {
	for (let i = 0; i < languageData.length; i++) {
		const languageName = languageData[i];
		await generateLanguage(languageName);
	}
};

const generateLanguage = async (languageName: string) => {
	const language = await prisma.language.create({
		data: { languageName },
	});
	console.log(`created language: ${language.languageName}`);
	await generateTests(language.languageId);
};

export default generateLanguages;
