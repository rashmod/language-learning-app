import { Dispatch, SetStateAction } from 'react';

import { TQuestion } from './Question';
import InfiniteQuestion from './InfiniteQuestion';

export type TInfiniteQuestion = {
	answeredCorrect: boolean | null;
	question: TQuestion;
};

const InfiniteQuestionList = ({
	questions,
	setScoreAchieved,
	setMaxScorePossible,
	setQuestions,
	setShouldFetch,
}: {
	questions: TInfiniteQuestion[];
	setQuestions: Dispatch<SetStateAction<TInfiniteQuestion[]>>;
	setScoreAchieved: Dispatch<SetStateAction<number>>;
	setMaxScorePossible: Dispatch<SetStateAction<number>>;
	setShouldFetch: Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<div className='grid w-2/3 mx-auto gap-y-8'>
			{questions.map(({ question }: TInfiniteQuestion, index) => (
				<InfiniteQuestion
					key={`${question.questionId}${index}`}
					questionId={question.questionId}
					questionText={question.questionText}
					difficulty={question.difficulty}
					options={question.options}
					index={index}
					setScoreAchieved={setScoreAchieved}
					setMaxScorePossible={setMaxScorePossible}
					setQuestions={setQuestions}
					setShouldFetch={setShouldFetch}
				/>
			))}
		</div>
	);
};

export default InfiniteQuestionList;
