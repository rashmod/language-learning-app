import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { TUserLanguageWithRank } from '../api/users';
import { addUserLanguage, getAllLanguages } from '../api/languages';
import { useGlobalState } from '../context/globalContext';

const UserLanguageComponent = ({
	userLanguages,
}: {
	userLanguages: TUserLanguageWithRank[];
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const { userId } = useGlobalState();

	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: addUserLanguage,
		onSuccess: () =>
			queryClient.invalidateQueries({ queryKey: ['languages', userId] }),
	});

	const {
		data: languagesData,
		isLoading: languagesIsLoading,
		isError: languagesIsError,
	} = useQuery({
		queryKey: ['languages'],
		queryFn: getAllLanguages,
	});

	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors },
	} = useForm<{ userLanguage: string }>();

	const languagesToChoose = languagesData?.data.filter((lang) =>
		userLanguages.every(
			(userLang) => userLang.language.languageId !== lang.languageId
		)
	);

	const submitHandler = () => {
		setIsEditing(false);
		mutation.mutate({ userId, languageId: watch('userLanguage') });
	};

	if (languagesIsLoading) return <h1>Loading...</h1>;

	if (languagesIsError) return <h1>Error</h1>;

	if (isEditing)
		return (
			<form onSubmit={handleSubmit(submitHandler)} className='grid gap-2'>
				<div className='flex justify-between'>
					<label
						htmlFor='userLanguage'
						className='text-sm text-gray-600'>
						User Languages
					</label>
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
								reset();
								setIsEditing(false);
							}}>
							Cancel
						</button>
					</div>
				</div>
				<select
					id='userLanguage'
					{...register('userLanguage', {
						required: 'Select a language.',
					})}
					className='border border-gray-600 rounded p-2.5 text-lg min-h-40'>
					<option value=''>Choose a language</option>
					{languagesToChoose?.map((lang) => (
						<option key={lang.languageId} value={lang.languageId}>
							{lang.languageName}
						</option>
					))}
				</select>
				{errors && errors['userLanguage'] && (
					<p className='mt-0.5 text-sm text-red-400'>
						{errors['userLanguage'].message}
					</p>
				)}
			</form>
		);

	return (
		<div className='grid gap-2'>
			<div className='flex justify-between'>
				<div className='text-sm text-gray-600'>User Languages</div>
				<button
					type='button'
					className='px-4 py-1 text-xs transition-all duration-200 border rounded hover:text-white hover:bg-black'
					onClick={() => setIsEditing(true)}>
					Add language
				</button>
			</div>
			<div className='flex flex-wrap w-5/6 gap-4'>
				{userLanguages.map((language) => (
					<div
						key={language.language.languageId}
						className='flex items-end justify-between px-3 py-1 text-xs border-2 border-gray-600 rounded-md'>
						{language.language.languageName}
					</div>
				))}
			</div>
		</div>
	);
};

export default UserLanguageComponent;
