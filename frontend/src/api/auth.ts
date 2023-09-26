import axios from 'axios';

export type TUser = {
	userId: string;
	username: string;
	email: string;
	hashedPassword: string;
	createdAt: string;
	updatedAt: string;
};

export type TSignIn = {
	email: string;
	password: string;
};

export type TSignUp = TSignIn & {
	username: string;
};

export const signIn = async ({
	email,
	password,
}: TSignIn): Promise<{
	success: boolean;
	data: TUser;
}> => {
	const res = await axios.post(
		`${import.meta.env.VITE_BACKEND_BASE_URL}/api/auth/signIn`,
		{
			email,
			password,
		}
	);
	const data = await res.data;
	return data;
};

export const signUp = async ({
	email,
	password,
	username,
}: TSignUp): Promise<{
	success: boolean;
	data: TUser;
}> => {
	const res = await axios.post(
		`${import.meta.env.VITE_BACKEND_BASE_URL}/api/users`,
		{
			username,
			email,
			password,
		}
	);
	const data = await res.data;
	return data;
};

export const signOut = async (): Promise<{
	success: boolean;
}> => {
	const res = await axios.get(
		`${import.meta.env.VITE_BACKEND_BASE_URL}/api/auth/signOut`,
		{ withCredentials: true }
	);
	const data = await res.data;
	return data;
};
