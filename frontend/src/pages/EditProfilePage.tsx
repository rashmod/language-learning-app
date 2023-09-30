import { useQuery } from '@tanstack/react-query';

import { getUserDetails } from '../api/users';
import { useGlobalState } from '../context/globalContext';
import UpdateUsername from '../components/UpdateUsername';
import UpdateUserLanguage from '../components/UpdateUserLanguage';
import UpdatePassword from '../components/UpdatePassword';

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
			<UpdateUsername username={userData.data.username} />
			<UpdateUserLanguage userLanguages={userData.data.languages} />
			<UpdatePassword />
		</div>
	);
};

export default EditProfilePage;
