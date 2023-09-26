import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { getTestQuestions } from '../api/questions';
import useUnsavedChangesWarning from '../hooks/useUnsavedChangesWarning';
import QuestionList from '../components/QuestionList';
import { useNavigationState } from '../context/navigationContext';
import ConfirmEndTestModal from '../components/ConfirmEndTestModal';

const TestPage = () => {
	const [testScore, setTestScore] = useState(0);
	const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

	const {
		state: { languageId, testId, testName },
	} = useLocation();

	const {
		data: questionsData,
		isLoading: questionsIsLoading,
		isError: questionsIsError,
	} = useQuery({
		queryKey: ['questions', testId],
		queryFn: () => getTestQuestions(languageId, testId),
	});

	const length = questionsData ? questionsData.data.length : 0;

	const { setLength } = useNavigationState();

	useEffect(() => {
		setLength(length);
	}, [length, setLength]);

	useUnsavedChangesWarning(true);

	console.log({ testScore });

	if (questionsIsLoading) return <h1>Loading...</h1>;

	if (questionsIsError) return <h1>Error</h1>;

	return (
		<div>
			{isSubmitModalOpen && (
				<ConfirmEndTestModal
					setIsSubmitModalOpen={setIsSubmitModalOpen}
					languageId={languageId}
					testId={testId}
					testScore={testScore}
				/>
			)}
			<div className='flex justify-between mb-4'>
				<h1 className='text-lg font-semibold text-gray-400'>
					{testName}
				</h1>
				<button
					type='button'
					onClick={() => setIsSubmitModalOpen(true)}
					className='px-3 py-1 text-xs transition-all duration-200 border border-gray-600 rounded hover:text-white hover:bg-red-600 hover:border-red-600'>
					End Test
				</button>
			</div>
			{questionsData.count > 0 ? (
				<QuestionList
					questions={questionsData.data}
					setTestScore={setTestScore}
				/>
			) : (
				<div>No Questions added to this test yet.</div>
			)}
		</div>
	);
};

export default TestPage;
