import axios from 'axios';

export const getAllLanguages = async (): Promise<{
	success: boolean;
	count: number;
	data: TLanguage[];
}> => {
	const res = await axios.get(
		`${import.meta.env.VITE_BACKEND_BASE_URL}/api/languages`,
		{ withCredentials: true }
	);
	const data = await res.data;
	return data;
};

export const getUserLanguages = async (
	userId: string
): Promise<{ success: boolean; count: number; data: TUserLanguage[] }> => {
	const res = await axios.get(
		`${import.meta.env.VITE_BACKEND_BASE_URL}/api/users/${userId}/languages`
	);
	const data = await res.data;
	return data;
};

export type TUserLanguage = {
	proficiencyLevel: number;
	score: number;
	languageId: string;
	userId: string;
};

export type TLanguage = {
	languageId: string;
	languageName: string;
};
