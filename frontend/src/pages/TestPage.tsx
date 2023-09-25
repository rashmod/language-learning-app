import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTestQuestions } from '../api/questions';
import QuestionList from '../components/QuestionList';

const TestPage = () => {
	const {
		state: { languageId, testId },
	} = useLocation();

	const { data, isLoading, isError } = useQuery({
		queryKey: ['questions', testId],
		queryFn: () => getTestQuestions(languageId, testId),
	});

	if (isLoading) return <h1>Loading...</h1>;

	if (isError) return <h1>Error</h1>;

	return (
		<div>
			<QuestionList data={data} />
		</div>
	);
};

export default TestPage;
