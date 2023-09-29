import { useMutation, useQueryClient } from '@tanstack/react-query';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';

import { signOut } from '../api/auth';
import { useGlobalState } from '../context/globalContext';
import toastConfig from '../config/toastConfig';

const Navbar = () => {
	const { userId, setUserId } = useGlobalState();
	const mutation = useMutation({ mutationFn: signOut });

	const queryClient = useQueryClient();

	const navigate = useNavigate();

	const signOutSuccess = useMemo(() => mutation.isSuccess, [mutation]);
	const reset = mutation.reset;

	useEffect(() => {
		if (signOutSuccess) {
			localStorage.removeItem('userId');
			localStorage.removeItem('languageId');
			setUserId('');
			navigate('/', { replace: false });
			toast.success('Successfully signed out', toastConfig);

			queryClient.resetQueries();
			reset();
		}
	}, [signOutSuccess, navigate, setUserId, reset, queryClient]);

	return (
		<nav className='flex justify-between py-2 mb-4 border-b border-black'>
			<NavLink to='/'>JediTalks</NavLink>
			<div className='flex gap-8'>
				<NavLink to='/'>Home</NavLink>
				{userId && <NavLink to='/language'>Tests</NavLink>}
				{userId && <NavLink to='/me'>Profile</NavLink>}
				{!userId && <NavLink to='/sign-in'>Sign In</NavLink>}
				{userId && (
					<button onClick={() => mutation.mutate()}>Sign Out</button>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
