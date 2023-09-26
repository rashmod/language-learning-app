import axios from 'axios';
import { TTest } from '../components/Test';

export const getTests = async (
	languageId: string
): Promise<{ success: boolean; count: number; data: TTest[] }> => {
	const res = await axios.get(
		`${
			import.meta.env.VITE_BACKEND_BASE_URL
		}/api/languages/${languageId}/tests`
	);
	const data = await res.data;
	return data;
};

export const endTest = async (
	userId: string,
	languageId: string,
	testId: string,
	score: number
): Promise<{ success: boolean; count: number; data: TTestResult }> => {
	const res = await axios.post(
		`${
			import.meta.env.VITE_BACKEND_BASE_URL
		}/api/users/${userId}/languages/${languageId}/tests/${testId}/testResults`,
		{ score }
	);
	const data = await res.data;
	return data;
};

export type TTestResult = {
	testResultId: string;
	userId: string;
	testId: string;
	score: number;
	completedAt: string;
};
