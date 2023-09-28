import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState, useMemo } from 'react';
import { ChevronRight } from 'lucide-react';

import { getInfiniteQuestions } from '../api/questions';
import useUnsavedChangesWarning from '../hooks/useUnsavedChangesWarning';
import { useNavigationState } from '../context/navigationContext';
import InfiniteQuestionList, {
	TInfiniteQuestion,
} from '../components/InfiniteQuestionList';

const realBatchSize = 10;
const bufferSize = Math.floor(realBatchSize * 0.5); // buffer is half the size of the batch
let questionBatchSize = realBatchSize + bufferSize;

const InfiniteTestPage = () => {
	const {
		state: { languageId, testName, languageName },
	} = useLocation();

	const [scoreAchieved, setScoreAchieved] = useState(0);
	const [maxScorePossible, setMaxScorePossible] = useState(0);
	const [shouldFetch, setShouldFetch] = useState(true);
	const [questions, setQuestions] = useState<TInfiniteQuestion[]>([]);

	const { data, isLoading, isError } = useQuery({
		queryKey: ['infinite'],
		queryFn: () =>
			getInfiniteQuestions({
				languageId,
				scoreAchieved,
				maxScorePossible,
				questionBatchSize,
			}),
		// onSuccess: () => setShouldFetch(false),
		enabled: shouldFetch,
	});

	// useEffect(() => {
	// 	setShouldFetch(true);
	// }, []);

	useEffect(() => {
		questionBatchSize = realBatchSize;
	}, []);

	// const length = data ? data.data.length : 0;

	const append = useMemo(
		() =>
			data?.data.map((item) => ({
				answeredCorrect: null,
				question: item,
			})),
		[data]
	);

	const { setLength, setRightOffset } = useNavigationState();

	useEffect(() => {
		setQuestions((prev) => {
			if (prev && append) return [...prev, ...append];
			return prev;
		});
	}, [append]);

	useEffect(() => {
		setLength(questions.length);
		setShouldFetch(false);
		setRightOffset(Math.floor(questionBatchSize / 2)); // navigation should stop half way between fetched questions each batch
	}, [questions, setLength, setRightOffset]);

	useEffect(() => {
		setMaxScorePossible(0);
		setScoreAchieved(0);
	}, [shouldFetch]);

	useUnsavedChangesWarning(true);

	if (isLoading) return <h1>Loading...</h1>;

	if (isError) return <h1>Error</h1>;

	return (
		<div>
			<div className='flex justify-between mb-4'>
				<h1 className='flex items-center gap-2 text-lg font-semibold text-gray-400'>
					<p>{languageName}</p>
					<ChevronRight />
					<p>{testName}</p>
				</h1>
			</div>
			{data.count > 0 ? (
				<InfiniteQuestionList
					questions={questions}
					setQuestions={setQuestions}
					setScoreAchieved={setScoreAchieved}
					setMaxScorePossible={setMaxScorePossible}
					setShouldFetch={setShouldFetch}
				/>
			) : (
				<div>No Questions added to this test yet.</div>
			)}
		</div>
	);
};

export default InfiniteTestPage;
