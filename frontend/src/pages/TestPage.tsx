import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTestQuestions } from '../api/questions';
import useMultiStep from '../hooks/useMultiStep';
import Question from '../components/Question';

const TestPage = () => {
	const {
		state: { languageId, testId },
	} = useLocation();

	const { data, isLoading, isError } = useQuery({
		queryKey: ['questions', testId],
		queryFn: () => getTestQuestions(languageId, testId),
	});

	const length = data ? data.data.length : 0;

	const {
		currentStepIndex,
		goToNextPage,
		goToPreviousPage,
		isFirstPage,
		isLastPage,
	} = useMultiStep(length);

	if (isLoading) return <h1>Loading...</h1>;

	if (isError) return <h1>Error</h1>;

	const currentQuestion = data.data[currentStepIndex];

	return (
		<Question
			questionText={currentQuestion.questionText}
			difficulty={currentQuestion.difficulty}
			options={currentQuestion.options}
			index={currentStepIndex}
			goToNextPage={goToNextPage}
			goToPreviousPage={goToPreviousPage}
			isFirstPage={isFirstPage}
			isLastPage={isLastPage}
		/>
	);
};

export default TestPage;
