import MultiStepComponent, { TMultiStepComponent } from './MultiStepComponent';
import Option, { TOption } from './Option';

export type TQuestion = {
	questionId: string;
	questionText: string;
	difficulty: number;
	createdAt: string;
	testId: string;
	options: TOption[];
};

const Question = ({
	questionText,
	difficulty,
	options,
	index,
	goToNextPage,
	goToPreviousPage,
	isFirstPage,
	isLastPage,
}: Omit<TQuestion, 'createdAt' | 'questionId' | 'testId'> &
	TMultiStepComponent & {
		index: number;
	}) => {
	return (
		<form className='relative'>
			<p className='mb-4 text-xl font-semibold'>
				{index + 1}. {questionText}
			</p>
			<span className='absolute text-xs text-gray-600 top-1 right-4'>
				{difficulty} marks
			</span>
			<ul className='grid w-full gap-2'>
				{options.map((option, index) => (
					<Option
						key={option.optionId}
						optionId={option.optionId}
						optionText={option.optionText}
						isCorrect={option.isCorrect}
						questionId={option.questionId}
						index={index}
					/>
				))}
			</ul>
			<MultiStepComponent
				goToNextPage={goToNextPage}
				goToPreviousPage={goToPreviousPage}
				isFirstPage={isFirstPage}
				isLastPage={isLastPage}
			/>
		</form>
	);
};

export default Question;
