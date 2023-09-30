import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

import { useGlobalState } from '../context/globalContext';
import { updatePassword } from '../api/users';

export type TPasswordChange = {
	oldPassword: string;
	newPassword: string;
	confirmPassword: string;
};

const PasswordComponent = () => {
	const [isEditing, setIsEditing] = useState(false);
	const { userId } = useGlobalState();

	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: updatePassword,
		onSuccess: () =>
			queryClient.invalidateQueries({ queryKey: ['user', userId] }),
	});

	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors },
	} = useForm<TPasswordChange>({
		defaultValues: {
			oldPassword: '',
			newPassword: '',
			confirmPassword: '',
		},
	});

	const submitHandler: SubmitHandler<TPasswordChange> = (data) => {
		mutation.mutate({
			userId,
			oldPassword: data.oldPassword,
			newPassword: data.newPassword,
		});
		setIsEditing(false);
	};

	if (isEditing)
		return (
			<form className='grid gap-2' onSubmit={handleSubmit(submitHandler)}>
				<div className='flex items-center justify-between'>
					<label className='text-sm text-gray-600'>Password</label>
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
							onClick={() => {
								setIsEditing(false);
								reset();
							}}>
							Cancel
						</button>
					</div>
				</div>
				<input
					className='font-mono text-lg font-medium bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-black focus:border-black block w-full p-2.5'
					placeholder='old password'
					type='password'
					{...register('oldPassword', {
						required: 'Old Password is required',
						minLength: {
							value: 3,
							message:
								'Old Password must be at least 8 characters long',
						},
						maxLength: {
							value: 20,
							message:
								'Old Password must not be more than 20 characters long',
						},
					})}
				/>
				{errors && errors['oldPassword'] && (
					<p className='mt-0.5 text-sm text-red-400'>
						{errors['oldPassword'].message}
					</p>
				)}
				<input
					className='font-mono text-lg font-medium bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-black focus:border-black block w-full p-2.5'
					placeholder='new password'
					type='password'
					{...register('newPassword', {
						required: 'New Password is required',
						minLength: {
							value: 3,
							message:
								'New Password must be at least 8 characters long',
						},
						maxLength: {
							value: 20,
							message:
								'New Password must not be more than 20 characters long',
						},
					})}
				/>
				{errors && errors['newPassword'] && (
					<p className='mt-0.5 text-sm text-red-400'>
						{errors['newPassword'].message}
					</p>
				)}
				<input
					className='font-mono text-lg font-medium bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-black focus:border-black block w-full p-2.5'
					placeholder='confirm password'
					type='password'
					{...register('confirmPassword', {
						required: 'Confirm Password is required',
						minLength: {
							value: 3,
							message:
								'Confirm Password must be at least 8 characters long',
						},
						maxLength: {
							value: 20,
							message:
								'Confirm Password must not be more than 20 characters long',
						},
						validate: (val: string) => {
							if (val !== watch('newPassword'))
								return 'New Password and Confirm Password do not match';
						},
					})}
				/>
				{errors && errors['confirmPassword'] && (
					<p className='mt-0.5 text-sm text-red-400'>
						{errors['confirmPassword'].message}
					</p>
				)}
			</form>
		);

	return (
		<div>
			<div className='flex items-center justify-between'>
				<div className='text-sm text-gray-600'>Password</div>
				<button
					type='button'
					className='px-4 py-1 text-xs transition-all duration-200 border rounded hover:text-white hover:bg-black'
					onClick={() => setIsEditing(true)}>
					Edit Password
				</button>
			</div>
			<div className='font-mono text-lg font-medium'>
				You know your password...
			</div>
		</div>
	);
};

export default PasswordComponent;
