import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { getTestQuestions } from '../api/questions';
import useUnsavedChangesWarning from '../hooks/useUnsavedChangesWarning';
import QuestionList from '../components/QuestionList';
import { useNavigationState } from '../context/navigationContext';

const TestPage = () => {
	const [testScore, setTestScore] = useState(0);

	const {
		state: { languageId, testId, testName },
	} = useLocation();

	const { data, isLoading, isError } = useQuery({
		queryKey: ['questions', testId],
		queryFn: () => getTestQuestions(languageId, testId),
	});

	const length = data ? data.data.length : 0;

	const { setLength } = useNavigationState();

	useEffect(() => {
		setLength(length);
	}, [length, setLength]);

	useUnsavedChangesWarning(true);

	console.log({ testScore });

	if (isLoading) return <h1>Loading...</h1>;

	if (isError) return <h1>Error</h1>;

	return (
		<div>
			<div className='flex justify-between mb-4'>
				<h1 className='text-lg font-semibold text-gray-400'>
					{testName}
				</h1>
				<button
					type='button'
					className='px-3 py-1 text-xs transition-all duration-200 border border-gray-600 rounded hover:text-white hover:bg-red-600 hover:border-red-600'>
					End Test
				</button>
			</div>
			{data.count > 0 ? (
				<QuestionList
					questions={data.data}
					setTestScore={setTestScore}
				/>
			) : (
				<div>No Questions added to this test yet.</div>
			)}
		</div>
	);
};

export default TestPage;
