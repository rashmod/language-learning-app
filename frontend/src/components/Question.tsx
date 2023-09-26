import {
	ChangeEvent,
	useMemo,
	useState,
	Dispatch,
	SetStateAction,
} from 'react';

import MultiStepComponent from './MultiStepComponent';
import Option, { TOption } from './Option';
import shuffle from '../utilities/shuffle';
import { useNavigationState } from '../context/navigationContext';

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
	setTestScore,
}: Omit<TQuestion, 'createdAt' | 'questionId' | 'testId'> & {
	index: number;
	setTestScore: Dispatch<SetStateAction<number>>;
}) => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [checked, setChecked] = useState<string>();
	const [answerIsCorrect, setAnswerIsCorrect] = useState(false);

	const { currentStepIndex } = useNavigationState();

	const onSelectHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) setChecked(e.target.value);
	};

	const submitHandler = () => {
		setIsSubmitted(true);
		if (answerIsCorrect) setTestScore((prev) => prev + difficulty);
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
							setAnswerIsCorrect={setAnswerIsCorrect}
						/>
					))}
				</ul>
				<MultiStepComponent submitHandler={submitHandler} />
			</form>
		);
};

export default Question;
