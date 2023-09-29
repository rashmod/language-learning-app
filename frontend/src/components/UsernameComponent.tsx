import { useState } from 'react';

const UsernameComponent = ({ username }: { username: string }) => {
	const [isEditing, setIsEditing] = useState(false);
	if (isEditing)
		return (
			<div>
				<div className='flex items-center justify-between'>
					<div className='text-sm text-gray-600'>Username</div>
					<button
						type='button'
						className='px-4 py-1 text-xs transition-all duration-200 border rounded hover:text-white hover:bg-black'
						onClick={() => setIsEditing(true)}>
						Edit Username
					</button>
				</div>
				<div className='font-mono text-lg font-medium'>{username}</div>
			</div>
		);

	return (
		<div>
			<div className='flex items-center justify-between'>
				<div className='text-sm text-gray-600'>Username</div>
				<button
					type='button'
					className='px-4 py-1 text-xs transition-all duration-200 border rounded hover:text-white hover:bg-black'
					onClick={() => setIsEditing(true)}>
					Edit Username
				</button>
			</div>
			<div className='font-mono text-lg font-medium'>{username}</div>
		</div>
	);
};

export default UsernameComponent;
