import connectDB, { prisma } from '../db/prisma';
import generateLanguage from './generator/generateLanguage';
import generateQuestions from './generator/generateQuestions';
import seedCallback from './utilities/seedCallback';

connectDB();

// seedCallback(generateTest, 'generate Test');
// seedCallback(generateLanguage, 'generate Test');
seedCallback(async () => {
	// await prisma.language.deleteMany();
	// await prisma.testResult.deleteMany();
	// await prisma.user.deleteMany();
}, 'delete');
