import express from 'express';
import dotenv from 'dotenv';

import connectDB from './db/prisma';
import UserRoutes from './routes/UserRoutes';
import LanguageRoutes from './routes/LanguageRoutes';
import TestRoutes from './routes/TestRoutes';
import QuestionRoutes from './routes/QuestionRoutes';
import OptionRoutes from './routes/OptionRoutes';
import errorHandler from './middlewares/errorHandler';

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

// todo handle update and delete endpoints
app.use('/api/users', UserRoutes);
app.use('/api/languages', LanguageRoutes);
app.use('/api/languages/:languageId/tests', TestRoutes);
app.use('/api/tests/:testId/questions', QuestionRoutes);
app.use('/api/questions/:questionId/options', OptionRoutes);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
	console.log(`server running in environment: ${process.env.NODE_ENV}`);
	console.log(`server running on port: ${process.env.PORT}`);
});
