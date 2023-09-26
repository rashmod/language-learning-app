import { useMutation } from '@tanstack/react-query';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';

import { signOut } from '../api/auth';

const Navbar = () => {
	const mutation = useMutation({ mutationFn: signOut });

	const navigate = useNavigate();

	const signOutSuccess = useMemo(() => mutation.isSuccess, []);

	useEffect(() => {
		if (signOutSuccess) {
			localStorage.removeItem('userId');
			localStorage.removeItem('languageId');
			navigate('/', { replace: false });
		}
	}, [signOutSuccess, navigate]);

	return (
		<nav className='flex justify-between py-2 mb-4 border-b border-black'>
			<NavLink to='/'>JediTalks</NavLink>
			<div className='flex gap-8'>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/'>Profile</NavLink>
				<NavLink to='/sign-in'>Sign In</NavLink>
				<button onClick={() => mutation.mutate()}>Sign Out</button>
			</div>
		</nav>
	);
};

export default Navbar;
