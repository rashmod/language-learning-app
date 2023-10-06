import connectDB from '../db/prisma';
import clearDatabase from './clearDatabase';
import clearUsers from './clearUsers';
import generateLanguages from './generator/generateLanguages';
import generateUsers from './generator/generateUsers';
import seedCallback from './utilities/seedCallback';

connectDB();

// const clearDatabaseMessage = 'clearing database';
// seedCallback(clearDatabase, clearDatabaseMessage);

// const clearUsersMessage = 'clearing users from database';
// seedCallback(clearUsers, clearUsersMessage);

// const generateLanguagesMessage =
// 	'seeding database with language, test, questions and options data';
// seedCallback(generateLanguages, generateLanguagesMessage);

// const generateUserMessage =
// 	'seeding database with user, user languages and test results data';
// seedCallback(() => generateUsers(100), generateUserMessage);
