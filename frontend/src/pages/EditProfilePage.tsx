import { useQuery } from '@tanstack/react-query';

import { getUserDetails } from '../api/users';
import { useGlobalState } from '../context/globalContext';
import UsernameComponent from '../components/UsernameComponent';
import UserLanguageComponent from '../components/UserLanguageComponent';
import PasswordComponent from '../components/PasswordComponent';

const EditProfilePage = () => {
	const { userId } = useGlobalState();
	const {
		data: userData,
		isLoading: userIsLoading,
		isError: userIsError,
	} = useQuery({
		queryKey: ['user', userId],
		queryFn: () => getUserDetails(userId),
	});

	if (userIsLoading) return <h1>Loading...</h1>;

	if (userIsError) return <h1>Error</h1>;

	return (
		<div className='grid gap-8'>
			<h1 className='mt-4 text-xl font-medium'>Edit Profile</h1>
			<UsernameComponent username={userData.data.username} />
			<UserLanguageComponent userLanguages={userData.data.languages} />
			<PasswordComponent />
		</div>
	);
};

export default EditProfilePage;
