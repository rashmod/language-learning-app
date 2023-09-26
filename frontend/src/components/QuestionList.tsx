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
}: { questions: TQuestion[]; currentStepIndex: number } & Omit<
	TMultiStepComponent,
	'setIsSubmitted'
>) => {
	const shuffledQuestions = shuffle(questions);

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
				/>
			))}
		</div>
	);
};

export default QuestionList;