import axios from 'axios';
import { TQuestion } from '../components/Question';

export const getTestQuestions = async (
	languageId: string,
	testId: string
): Promise<{ success: boolean; count: number; data: TQuestion[] }> => {
	// todo change return type to all possible results
	const res = await axios.get(
		`${
			import.meta.env.VITE_BACKEND_BASE_URL
		}/api/languages/${languageId}/tests/${testId}/questions`,
		{ withCredentials: true }
	);
	const data = await res.data;
	return data;
};

export const getInfiniteQuestions = async ({
	languageId,
	maxScorePossible,
	scoreAchieved,
	questionBatchSize,
}: {
	languageId: string;
	maxScorePossible: number;
	scoreAchieved: number;
	questionBatchSize: number;
}): Promise<{ success: boolean; count: number; data: TQuestion[] }> => {
	// todo change return type to all possible results
	const res = await axios.get(
		`${
			import.meta.env.VITE_BACKEND_BASE_URL
		}/api/languages/${languageId}/tests/infinite`,
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

// export const getUserLanguages = async (userId: string) => {
// 	const res = await axios.get(
// 		`${import.meta.env.VITE_BACKEND_BASE_URL}/api/listings/${userId}`
// 	);
// 	const { data } = await res.data;
// 	return data;
// };
