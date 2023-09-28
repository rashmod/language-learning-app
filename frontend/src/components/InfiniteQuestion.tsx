import {
	ChangeEvent,
	useMemo,
	useState,
	Dispatch,
	SetStateAction,
} from 'react';

import MultiStepComponent from './MultiStepComponent';
import Option from './Option';
import shuffle from '../utilities/shuffle';
import { useNavigationState } from '../context/navigationContext';
import { TQuestion } from './Question';
import { TInfiniteQuestion } from './InfiniteQuestionList';

const InfiniteQuestion = ({
	questionId,
	questionText,
	difficulty,
	options,
	index,
	setScoreAchieved,
	setMaxScorePossible,
	setQuestions,
	setShouldFetch,
}: Omit<TQuestion, 'createdAt' | 'questionId' | 'testId'> & {
	questionId: string;
	index: number;
	setScoreAchieved: Dispatch<SetStateAction<number>>;
	setMaxScorePossible: Dispatch<SetStateAction<number>>;
	setQuestions: Dispatch<SetStateAction<TInfiniteQuestion[]>>;
	setShouldFetch: Dispatch<SetStateAction<boolean>>;
}) => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [checked, setChecked] = useState<string>();
	const [answerIsCorrect, setAnswerIsCorrect] = useState(false);

	const { currentStepIndex, length, rightOffset } = useNavigationState();

	const onSelectHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) setChecked(e.target.value);
	};

	const submitHandler = () => {
		// console.log('-------------------');
		// console.log('from submit handler');
		// console.log('-------------------');
		if (!checked) return;
		// todo add score to user language
		setIsSubmitted(true);
		setQuestions((prev) =>
			prev.map((item) => {
				if (item.question.questionId === questionId) {
					return { ...item, answeredCorrect: answerIsCorrect };
				}
				return item;
			})
		);
		setMaxScorePossible((prev) => prev + difficulty);
		if (answerIsCorrect) setScoreAchieved((prev) => prev + difficulty);
		if (length - 1 - currentStepIndex === rightOffset) setShouldFetch(true);
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
				<MultiStepComponent
					submitHandler={submitHandler}
					shouldDisableNext={!isSubmitted}
				/>
			</form>
		);
};

export default InfiniteQuestion;
