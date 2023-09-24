import express from 'express';
import dotenv from 'dotenv';

import connectDB from './db/prisma';
import UserRoutes from './routes/UserRoutes';

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use('/api/users', UserRoutes);

app.listen(process.env.PORT, () => {
	console.log(`server running in environment: ${process.env.NODE_ENV}`);
	console.log(`server running on port: ${process.env.PORT}`);
});
