import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { TSignUp, signUp } from '../api/auth';
import { useGlobalState } from '../context/globalContext';
import toastConfig from '../config/toastConfig';

const SignUp = () => {
	const mutation = useMutation({
		mutationFn: signUp,
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TSignUp>();

	const navigate = useNavigate();

	const { setUserId } = useGlobalState();

	const onSubmitHandler: SubmitHandler<TSignUp> = ({
		email,
		password,
		username,
	}) => {
		mutation.mutate({ email, password, username });
	};

	const signUpSuccess = mutation.isSuccess;
	const userId = mutation.data?.data.userId;

	useEffect(() => {
		if (signUpSuccess && userId) {
			navigate('/', { replace: true });
			localStorage.setItem('userId', userId);
			setUserId(userId);
			toast.success('Successfully signed up', toastConfig);
		}
	}, [signUpSuccess, userId, navigate, setUserId]);

	return (
		<div>
			<div className='w-1/3 mx-auto'>
				<p className='mt-4 mb-8 text-xl font-medium text-center'>
					Create A Account
				</p>
				<form
					className='space-y-4 md:space-y-6'
					onSubmit={handleSubmit(onSubmitHandler)}>
					<div>
						<label
							htmlFor='email'
							className='block mb-2 text-sm font-medium text-gray-900'>
							Your email
						</label>
						<input
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
						<label
							htmlFor='username'
							className='block mb-2 text-sm font-medium text-gray-900'>
							Username
						</label>
						<input
							id='username'
							placeholder='johnDoe123'
							className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-black focus:border-black block w-full p-2.5'
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
					</div>
					<div>
						<label
							htmlFor='password'
							className='block mb-2 text-sm font-medium text-gray-900'>
							Password
						</label>
						<input
							id='password'
							type='password'
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
						className='w-full text-black hover:bg-black hover:text-white border-2 border-black transition-all duration-200 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
						Sign Up
					</button>
					<p className='text-sm font-light text-gray-500'>
						Already have an account?
						<Link
							to='/sign-in'
							className='ml-1 font-medium text-black hover:underline'>
							Sign In
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
