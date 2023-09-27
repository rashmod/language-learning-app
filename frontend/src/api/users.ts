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
