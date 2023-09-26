import { useMemo, Dispatch, SetStateAction } from 'react';

import shuffle from '../utilities/shuffle';
import Question, { TQuestion } from './Question';

const QuestionList = ({
	questions,
	setTestScore,
}: {
	questions: TQuestion[];
	setTestScore: Dispatch<SetStateAction<number>>;
}) => {
	const shuffledQuestions = useMemo(() => shuffle(questions), [questions]);

	return (
		<div className='grid w-2/3 mx-auto gap-y-8'>
			{shuffledQuestions.map((question: TQuestion, index) => (
				<Question
					key={question.questionId}
					questionText={question.questionText}
					difficulty={question.difficulty}
					options={question.options}
					index={index}
					setTestScore={setTestScore}
				/>
			))}
		</div>
	);
};

export default QuestionList;
