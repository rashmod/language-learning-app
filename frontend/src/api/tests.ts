import axios from 'axios';
import { TTest } from '../components/Test';

export const getTests = async (
	languageId: string
): Promise<{ success: boolean; count: number; data: TTest[] }> => {
	const res = await axios.get(
		`${
			import.meta.env.VITE_BACKEND_BASE_URL
		}/api/languages/${languageId}/tests`,
		{ withCredentials: true }
	);
	const data = await res.data;
	return data;
};

export const endTest = async ({
	userId,
	languageId,
	testId,
	score,
}: {
	userId: string;
	languageId: string;
	testId: string;
	score: number;
}): Promise<{ success: boolean; data: TTestResult }> => {
	const res = await axios.post(
		`${
			import.meta.env.VITE_BACKEND_BASE_URL
		}/api/users/${userId}/languages/${languageId}/tests/${testId}/testResults`,
		{ score },
		{ withCredentials: true }
	);
	const data = await res.data;
	return data;
};

export const getTestResults = async ({
	userId,
	languageId,
}: {
	userId: string;
	languageId: string;
}): Promise<{
	success: boolean;
	count: number;
	data: TTestResultWithDetail[];
}> => {
	const res = await axios.get(
		`${
			import.meta.env.VITE_BACKEND_BASE_URL
		}/api/users/${userId}/languages/${languageId}/testResults`,
		{ withCredentials: true }
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

export type TTestResultWithDetail = TTestResult & {
	test: {
		maxScore: number;
		testName: string;
	};
};
