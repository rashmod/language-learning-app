import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import expressSession from 'express-session';

import connectDB from './db/prisma';
import UserRoutes from './routes/UserRoutes';
import LanguageRoutes from './routes/LanguageRoutes';
import TestRoutes from './routes/TestRoutes';
import QuestionRoutes from './routes/QuestionRoutes';
import OptionRoutes from './routes/OptionRoutes';
import TestResultRoutes from './routes/TestResultRoutes';
import AuthRoutes from './routes/AuthRoutes';
import InfiniteTestRoutes from './routes/InfiniteTestRoutes';
import UserLanguageRoutes from './routes/UserLanguageRoutes';
import errorHandler from './middlewares/errorHandler';

declare module 'express-session' {
	interface SessionData {
		user: any;
	}
}

dotenv.config();

const app = express();

if (!process.env.COOKIE_SECRET) {
	throw new Error('Set cookie secret in the environment variable');
}

if (!process.env.CLIENT_URL) {
	throw new Error('Set client url in the environment variable');
}

if (process.env.NODE_ENV === 'PRODUCTION') {
	app.set('trust proxy', 1);

	app.use(
		expressSession({
			secret: process.env.COOKIE_SECRET,
			resave: true,
			saveUninitialized: true,
			cookie: {
				sameSite: 'none',
				secure: true,
				maxAge: 1000 * 60 * 60 * 24 * 7, // one week
			},
		})
	);
}

if (process.env.NODE_ENV === 'DEVELOPMENT') {
	app.use(
		expressSession({
			secret: process.env.COOKIE_SECRET,
			resave: true,
			saveUninitialized: true,
		})
	);
}

app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

/*
todo 
add a route for when user just wants to solve questions 
change question list dynamically based on user performance
*/

// todo authentication and authorization
// todo add language to user
// todo reset progress for language
// todo leader board for users based on language and overall
// todo user gives test

// todo handle update and delete endpoints
app.use('/api/users', UserRoutes);
app.use('/api/languages', LanguageRoutes);
app.use('/api/languages/:languageId/tests', TestRoutes);
app.use('/api/languages/:languageId/tests/:testId/questions', QuestionRoutes);
app.use(
	'/api/languages/:languageId/tests/:testId/questions/:questionId/options',
	OptionRoutes
);
app.use('/api/users/:userId/languages', UserLanguageRoutes);
app.use(
	'/api/users/:userId/languages/:languageId/tests/infinite',
	InfiniteTestRoutes
);
app.use(
	'/api/users/:userId/languages/:languageId/tests/:testId/testResults',
	TestResultRoutes
);
app.use('/api/auth', AuthRoutes);

app.use(errorHandler);

connectDB();

app.listen(process.env.PORT, () => {
	console.log(`server running in environment: ${process.env.NODE_ENV}`);
	console.log(`server running on port: ${process.env.PORT}`);
});
