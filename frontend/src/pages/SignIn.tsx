import { Link } from 'react-router-dom';
import { FormEvent } from 'react';

const SignIn = () => {
	const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<div>
			<div className='w-1/3 mx-auto'>
				<p className='mt-4 mb-8 text-xl font-medium text-center'>
					Sign In
				</p>
				<form
					className='space-y-4 md:space-y-6'
					onSubmit={onSubmitHandler}>
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
							name='email'
							id='email'
							className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-black focus:border-black block w-full p-2.5'
							placeholder='name@company.com'
						/>
					</div>
					<div>
						<div className='mb-2'>
							<label
								htmlFor='password'
								className='block text-sm font-medium text-gray-900'>
								Password
							</label>
							<p className='text-xs'>
								for testing use: test@test
							</p>
						</div>
						<input
							type='password'
							name='password'
							id='password'
							placeholder='••••••••'
							className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-black focus:border-black block w-full p-2.5'
						/>
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
