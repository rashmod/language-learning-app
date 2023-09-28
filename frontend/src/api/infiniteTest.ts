import axios from 'axios';
import { TQuestion } from '../components/Question';

export const getInfiniteQuestions = async ({
	userId,
	languageId,
	maxScorePossible,
	scoreAchieved,
	questionBatchSize,
}: {
	userId: string;
	languageId: string;
	maxScorePossible: number;
	scoreAchieved: number;
	questionBatchSize: number;
}): Promise<{ success: boolean; count: number; data: TQuestion[] }> => {
	// todo change return type to all possible results
	const res = await axios.get(
		`${
			import.meta.env.VITE_BACKEND_BASE_URL
		}/api/users/${userId}/languages/${languageId}/tests/infinite`,
		{
			params: {
				scoreAchieved,
				maxScorePossible,
				questionBatchSize,
			},
			withCredentials: true,
		}
	);
	const data = await res.data;

	return data;
};

export const addInfiniteQuestionResult = async ({
	userId,
	languageId,
	score,
}: {
	userId: string;
	languageId: string;
	score: number;
}): Promise<{
	success: boolean;
	count: number;
	data: TQuestion[];
}> => {
	// todo change return type to all possible results
	const res = await axios.post(
		`${
			import.meta.env.VITE_BACKEND_BASE_URL
		}/api/users/${userId}/languages/${languageId}/tests/infinite`,
		{ score },
		{ withCredentials: true }
	);
	const data = await res.data;
	return data;
};
