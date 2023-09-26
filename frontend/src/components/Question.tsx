import { ChangeEvent, useMemo, useState } from 'react';

import MultiStepComponent, { TMultiStepComponent } from './MultiStepComponent';
import Option, { TOption } from './Option';
import shuffle from '../utilities/shuffle';

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
	currentStepIndex,
}: Omit<TQuestion, 'createdAt' | 'questionId' | 'testId'> &
	Omit<TMultiStepComponent, 'setIsSubmitted'> & {
		index: number;
		currentStepIndex: number;
	}) => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [checked, setChecked] = useState<string>();

	const onSelectHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) setChecked(e.target.value);
	};

	const shuffledOptions = useMemo(() => shuffle(options), [options]);

	if (index === currentStepIndex)
		return (
			<form className='relative'>
				<p className='mb-4 text-xl font-semibold'>
					{index + 1}. {questionText}
				</p>
				<span className='absolute text-xs text-gray-600 top-1 right-4'>
					{difficulty} marks
				</span>
				<ul className='grid w-full gap-2'>
					{shuffledOptions.map((option, index) => (
						<Option
							key={option.optionId}
							optionId={option.optionId}
							optionText={option.optionText}
							isCorrect={option.isCorrect}
							questionId={option.questionId}
							index={index}
							isSubmitted={isSubmitted}
							checked={checked}
							onSelectHandler={onSelectHandler}
						/>
					))}
				</ul>
				<MultiStepComponent
					goToNextPage={goToNextPage}
					goToPreviousPage={goToPreviousPage}
					isFirstPage={isFirstPage}
					isLastPage={isLastPage}
					setIsSubmitted={setIsSubmitted}
				/>
			</form>
		);
};

export default Question;