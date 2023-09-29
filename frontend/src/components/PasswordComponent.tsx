import { useState } from 'react';

const PasswordComponent = () => {
	const [isEditing, setIsEditing] = useState(false);

	if (isEditing)
		return (
			<div>
				<div className='flex justify-between'>
					<div className='text-sm text-gray-600'>Password</div>
					<button
						type='button'
						className='px-4 py-1 text-xs transition-all duration-200 border rounded hover:text-white hover:bg-black'
						onClick={() => setIsEditing(true)}>
						Change Password
					</button>
				</div>
				<div className='font-mono text-lg font-medium'>
					You know your password...
				</div>
			</div>
		);

	return (
		<div>
			<div className='flex justify-between'>
				<div className='text-sm text-gray-600'>Password</div>
				<button
					type='button'
					className='px-4 py-1 text-xs transition-all duration-200 border rounded hover:text-white hover:bg-black'
					onClick={() => setIsEditing(true)}>
					Change Password
				</button>
			</div>
			<div className='font-mono text-lg font-medium'>
				You know your password...
			</div>
		</div>
	);
};

export default PasswordComponent;
