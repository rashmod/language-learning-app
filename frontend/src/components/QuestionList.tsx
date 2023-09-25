import Question, { TQuestion } from './Question';

const QuestionList = ({ data }: { data: TQuestion[] }) => {
	return (
		<div className='grid w-2/3 mx-auto gap-y-8'>
			{data.map((question: TQuestion, index) => (
				<Question
					key={question.questionId}
					difficulty={question.difficulty}
					questionText={question.questionText}
					options={question.options}
					index={index}
				/>
			))}
		</div>
	);
};

export default QuestionList;
