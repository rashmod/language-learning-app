import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { updateUsername } from '../api/users';
import { useGlobalState } from '../context/globalContext';

const UsernameComponent = ({ username }: { username: string }) => {
	const [isEditing, setIsEditing] = useState(false);
	const { userId } = useGlobalState();

	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: updateUsername,
		onSuccess: () =>
			queryClient.invalidateQueries({ queryKey: ['user', userId] }),
	});

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: { username },
	});

	const SubmitHandler = () => {
		mutation.mutate({ userId, username: watch('username') });
		setIsEditing(false);
	};

	if (isEditing)
		return (
			<form className='grid gap-2' onSubmit={handleSubmit(SubmitHandler)}>
				<div className='flex items-center justify-between'>
					<label className='text-sm text-gray-600'>Username</label>
					<div className='flex gap-2'>
						<button
							type='submit'
							disabled={mutation.isLoading}
							className='px-4 py-1 text-xs transition-all duration-200 border rounded hover:text-white hover:bg-black'>
							Submit
						</button>
						<button
							type='button'
							disabled={mutation.isLoading}
							className='px-4 py-1 text-xs transition-all duration-200 border rounded hover:text-white hover:bg-red-600'
							onClick={() => setIsEditing(false)}>
							Cancel
						</button>
					</div>
				</div>
				<input
					className='font-mono text-lg font-medium bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-black focus:border-black block w-full p-2.5'
					{...register('username', {
						required: 'Username is required',
						minLength: {
							value: 3,
							message:
								'Username must be at least 3 characters long',
						},
						maxLength: {
							value: 20,
							message:
								'Username must not be more than 20 characters long',
						},
					})}
				/>
				{errors && errors['username'] && (
					<p className='mt-0.5 text-sm text-red-400'>
						{errors['username'].message}
					</p>
				)}
			</form>
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
