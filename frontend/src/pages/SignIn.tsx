import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { TSignIn, signIn } from '../api/auth';
import { useGlobalState } from '../context/globalContext';
import toastConfig from '../config/toastConfig';

const SignIn = () => {
	const mutation = useMutation({
		mutationFn: signIn,
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TSignIn>();

	const navigate = useNavigate();

	const { setUserId } = useGlobalState();

	const onSubmitHandler: SubmitHandler<TSignIn> = ({ email, password }) => {
		mutation.mutate({ email, password });
	};

	const signUpSuccess = mutation.isSuccess;
	const userId = mutation.data?.data.userId;

	console.log({ signUpSuccess, userId });

	useEffect(() => {
		if (signUpSuccess && userId) {
			navigate('/', { replace: true });
			localStorage.setItem('userId', userId);
			setUserId(userId);
			toast.success('Successfully signed in', toastConfig);
		}
	}, [signUpSuccess, userId, navigate, setUserId]);

	return (
		<div>
			<div className='w-1/3 mx-auto'>
				<p className='mt-4 mb-8 text-xl font-medium text-center'>
					Sign In
				</p>
				<form
					className='space-y-4 md:space-y-6'
					onSubmit={handleSubmit(onSubmitHandler)}>
					<div>
						<div className='mb-2'>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-gray-900'>
								Your email
							</label>
							<p className='text-xs'>
								for testing use: test@test.com
							</p>
						</div>
						<input
							type='email'
							id='email'
							className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-black focus:border-black block w-full p-2.5'
							placeholder='name@company.com'
							{...register('email', {
								required: 'Email is required',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Invalid email address',
								},
							})}
						/>
						{errors && errors['email'] && (
							<p className='mt-0.5 text-sm text-red-400'>
								{errors['email'].message}
							</p>
						)}
					</div>
					<div>
						<div className='mb-2'>
							<label
								htmlFor='password'
								className='block text-sm font-medium text-gray-900'>
								Password
							</label>
							<p className='text-xs'>for testing use: test</p>
						</div>
						<input
							type='password'
							id='password'
							placeholder='••••••••'
							className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-black focus:border-black block w-full p-2.5'
							{...register('password', {
								required: 'Password is required',
								minLength: {
									value: 3,
									message:
										'Password must be at least 8 characters long',
								},
								maxLength: {
									value: 20,
									message:
										'Password must not be more than 20 characters long',
								},
							})}
						/>
						{errors && errors['password'] && (
							<p className='mt-0.5 text-sm text-red-400'>
								{errors['password'].message}
							</p>
						)}
					</div>
					<button
						type='submit'
						className='w-full text-black hover:bg-black hover:text-white border-2 border-black transition-all duration-200 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
						Sign in
					</button>
					<p className='text-sm font-light text-gray-500'>
						Don't have an account?
						<Link
							to='/sign-up'
							className='ml-1 font-medium text-black hover:underline'>
							Sign Up
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default SignIn;
