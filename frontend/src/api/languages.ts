import axios from 'axios';
import { TUser } from './auth';

export type TGetAllLanguagesResponse = {
	success: true;
	count: number;
	data: TLanguage[];
};

export const getAllLanguages = async (): Promise<TGetAllLanguagesResponse> => {
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
		`${
			import.meta.env.VITE_BACKEND_BASE_URL
		}/api/users/${userId}/languages`,
		{ withCredentials: true }
	);
	const data = await res.data;
	return data;
};

export const addUserLanguage = async ({
	userId,
	languageId,
}: {
	userId: string;
	languageId: string;
}): Promise<{ success: boolean; count: number; data: TUser[] }> => {
	const res = await axios.post(
		`${
			import.meta.env.VITE_BACKEND_BASE_URL
		}/api/users/${userId}/languages/${languageId}`,
		null,
		{ withCredentials: true }
	);
	const data = await res.data;
	return data;
};

export type TUserLanguage = {
	proficiencyLevel: number;
	score: number;
	languageId: string;
	userId: string;
	language: {
		languageName: string;
	};
};

export type TLanguage = {
	languageId: string;
	languageName: string;
};
