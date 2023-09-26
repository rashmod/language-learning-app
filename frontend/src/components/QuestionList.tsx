import { useMemo, Dispatch, SetStateAction } from 'react';

import shuffle from '../utilities/shuffle';
import { TMultiStepComponent } from './MultiStepComponent';
import Question, { TQuestion } from './Question';

const QuestionList = ({
	questions,
	goToNextPage,
	goToPreviousPage,
	isFirstPage,
	isLastPage,
	currentStepIndex,
	setTestScore,
}: {
	questions: TQuestion[];
	currentStepIndex: number;
	setTestScore: Dispatch<SetStateAction<number>>;
} & Omit<TMultiStepComponent, 'setIsSubmitted'>) => {
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
					currentStepIndex={currentStepIndex}
					goToNextPage={goToNextPage}
					goToPreviousPage={goToPreviousPage}
					isFirstPage={isFirstPage}
					isLastPage={isLastPage}
					setTestScore={setTestScore}
				/>
			))}
		</div>
	);
};

export default QuestionList;
