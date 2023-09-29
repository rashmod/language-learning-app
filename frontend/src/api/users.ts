import axios from 'axios';

export type TLeaderBoard = {
	userId: string;
	username: string;
	totalScore: number;
};

export const getLeaderBoard = async (
	language: string
): Promise<{
	success: boolean;
	count: number;
	data: TLeaderBoard[];
}> => {
	const res = await axios.get(
		`${import.meta.env.VITE_BACKEND_BASE_URL}/api/users/leaderBoard`,
		{ params: { language }, withCredentials: true }
	);
	const data = await res.data;
	return data;
};

export const getUserDetails = async (
	userId: string
): Promise<{
	success: boolean;
	data: TUserDetails;
}> => {
	const res = await axios.get(
		`${import.meta.env.VITE_BACKEND_BASE_URL}/api/users/${userId}`,
		{ withCredentials: true }
	);

	const data = await res.data;
	return data;
};

export const updateUsername = async ({
	userId,
	username,
}: {
	userId: string;
	username: string;
}): Promise<{
	success: boolean;
	data: Pick<TUserDetails, 'userId' | 'username'>;
}> => {
	const res = await axios.patch(
		`${import.meta.env.VITE_BACKEND_BASE_URL}/api/users/${userId}/username`,
		{ username },
		{ withCredentials: true }
	);

	const data = await res.data;

	return data;
};

export type TUserDetails = {
	userId: string;
	username: string;
	createdAt: string;
	languages: TUserLanguageWithRank[];
};

export type TUserLanguageWithRank = {
	score: number;
	rank: number;
	language: {
		languageId: string;
		languageName: string;
	};
};
