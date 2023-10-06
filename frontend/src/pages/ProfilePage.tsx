import { useQuery } from '@tanstack/react-query';
import { useGlobalState } from '../context/globalContext';
import { getUserDetails } from '../api/users';
import cn from '../utilities/cn';
import { getTestResults } from '../api/tests';
import formatDate from '../utilities/formatDate';
import { Link } from 'react-router-dom';
import LoadingComponent from '../components/LoadingComponent';

const ProfilePage = () => {
	const { userId, languageId, setLanguageId } = useGlobalState();
	const {
		data: userData,
		isLoading: userIsLoading,
		isError: userIsError,
	} = useQuery({
		queryKey: ['user', userId],
		queryFn: () => getUserDetails(userId),
	});

	const { data: testResultsData, isLoading: testResultsIsLoading } = useQuery(
		{
			queryKey: ['user', userId, 'testResults', languageId],
			queryFn: () => getTestResults({ userId, languageId }),
		}
	);

	if (userIsLoading) return <h1>Loading...</h1>;

	if (userIsError) return <h1>Error</h1>;

	return (
		<div className='grid gap-4'>
			<div className='flex items-end justify-between'>
				<h1 className='mt-4 text-xl font-medium'>Profile</h1>
				<Link
					to='/me/edit'
					className='px-4 py-1 transition-all duration-200 border rounded hover:text-white hover:bg-black'>
					Edit Profile
				</Link>
			</div>
			<div>
				<div className='flex items-center gap-4'>
					<div className='text-sm text-gray-600'>Username</div>
					<div className='font-mono text-lg'>
						{userData.data.username}
					</div>
				</div>
				<div className='text-sm text-gray-600'>
					since {formatDate(userData.data.createdAt)}
				</div>
			</div>
			<div className='grid gap-2'>
				<div className='text-sm text-gray-600'>User Languages</div>
				<div className='grid gap-4'>
					{userData.data.languages.map((language) => (
						<div
							key={language.language.languageId}
							className={cn(
								'flex justify-between px-4 py-2 border-2 border-gray-600 rounded-lg items-end',
								{
									'bg-orange-600 border-orange-600 text-white':
										language.rank === 1,
									'bg-slate-600 border-slate-600 text-white':
										language.rank === 2,
									'bg-neutral-600 border-neutral-600 text-white':
										language.rank === 3,
								}
							)}>
							<div className='w-24'>Rank {language.rank}</div>
							<div
								className={cn('text-lg font-semibold grow', {
									'text-2xl font-extrabold':
										language.rank <= 3,
								})}>
								{language.language.languageName}
							</div>
							<div>{language.score}</div>
						</div>
					))}
				</div>
			</div>
			<div className='grid gap-2'>
				<div className='flex items-end justify-between'>
					<div className='text-sm text-gray-600'>Test Results</div>
					<select
						className='px-3 py-1 text-xs transition-all duration-200 border border-gray-600 rounded'
						value={languageId}
						onChange={(e) => setLanguageId(e.target.value)}>
						{userData.data.languages.map((lang) => (
							<option
								key={lang.language.languageId}
								value={lang.language.languageId}>
								{lang.language.languageName}
							</option>
						))}
					</select>
				</div>
				<div className='grid gap-4'>
					{testResultsIsLoading && <LoadingComponent />}
					{testResultsData?.data.map((result) => (
						<div
							key={result.testResultId}
							className='px-4 py-2 border-2 border-gray-600 rounded-lg '>
							<div className='flex items-end justify-between'>
								<div className='text-lg font-semibold grow'>
									{result.test.testName}
								</div>
								<div className='flex gap-2'>
									<span>{result.score}</span>/
									<span>{result.test.maxScore}</span>
								</div>
							</div>
							<div className='text-sm font-medium text-gray-400'>
								{formatDate(result.completedAt)}
							</div>
						</div>
					))}
					{testResultsData?.data.length === 0 && (
						<div>No tests given for this language</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
