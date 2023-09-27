import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { getLeaderBoard } from '../api/users';
import cn from '../utilities/cn';
import { getAllLanguages } from '../api/languages';
import { useGlobalState } from '../context/globalContext';

const LeaderBoard = () => {
	const { userId } = useGlobalState();
	const [leaderBoard, setLeaderBoard] = useState('');

	const { data: languagesData } = useQuery({
		queryKey: ['languages'],
		queryFn: getAllLanguages,
	});

	const {
		data: leaderBoardData,
		isLoading: leaderBoardIsLoading,
		isError: leaderBoardIsError,
	} = useQuery({
		queryKey: ['leaderBoard', leaderBoard],
		queryFn: ({ queryKey }) => getLeaderBoard(queryKey[1]),
	});

	if (leaderBoardIsLoading) return <h1>Loading...</h1>;

	if (leaderBoardIsError) return <h1>Error</h1>;

	return (
		<div className='grid gap-4'>
			<div className='flex items-end justify-between'>
				<h1 className='text-2xl font-bold'>Leader Board</h1>
				<select
					className='px-3 py-1 text-xs transition-all duration-200 border border-gray-600 rounded'
					value={leaderBoard}
					onChange={(e) => setLeaderBoard(e.target.value)}>
					<option value=''>Overall</option>
					{languagesData?.data.map((lang) => (
						<option key={lang.languageId} value={lang.languageId}>
							{lang.languageName}
						</option>
					))}
				</select>
			</div>
			{leaderBoardData.data.map((user, index) => (
				<div
					key={user.userId}
					className={cn(
						'flex justify-between px-4 py-2 border-2 border-gray-600 rounded-lg items-end',
						{
							'bg-orange-600 border-orange-600 text-white':
								index === 0,
							'bg-slate-600 border-slate-600 text-white':
								index === 1,
							'bg-neutral-600 border-neutral-600 text-white':
								index === 2,
							'border-8 border-black': userId === user.userId,
						}
					)}>
					<div className='w-24'>Rank {index + 1}</div>
					<div
						className={cn('text-lg font-semibold grow', {
							'text-2xl font-extrabold': index <= 2,
						})}>
						{user.username}
					</div>
					<div>{user.totalScore} points</div>
				</div>
			))}
		</div>
	);
};

export default LeaderBoard;
