import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='flex justify-between py-2 mb-4 border-b border-black'>
			<NavLink to='/'>JediTalks</NavLink>
			<div className='flex gap-8'>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/'>Profile</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
