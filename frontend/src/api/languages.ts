import axios from 'axios';

export const getAllLanguages = async (): Promise<{
	success: boolean;
	count: number;
	data: TLanguage[];
}> => {
	const res = await axios.get(
		`${import.meta.env.VITE_BACKEND_BASE_URL}/api/languages`
	);
	const { data } = await res.data;
	return data;
};

// export const getUserLanguages = async (userId: string) => {
// 	const res = await axios.get(
// 		`${import.meta.env.VITE_BACKEND_BASE_URL}/api/listings/${userId}`
// 	);
// 	const { data } = await res.data;
// 	return data;
// };

export type TLanguage = {
	languageId: string;
	languageName: string;
};
