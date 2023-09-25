import axios from 'axios';

export const getTests = async (languageId: string) => {
	const res = await axios.get(
		`${
			import.meta.env.VITE_BACKEND_BASE_URL
		}/api/languages/${languageId}/tests`
	);
	const { data } = await res.data;
	return data;
};
