import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='flex flex-col items-center justify-center grow'>
			<h1 className='mb-8 text-4xl font-semibold'>
				Uh Oh, Looks like you're lost
			</h1>
			<Link
				to='/'
				className='px-4 py-2 transition-all duration-200 border border-gray-600 rounded hover:text-white hover:bg-black'>
				Go Back to Home Page
			</Link>
		</div>
	);
};

export default NotFound;
