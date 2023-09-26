import { ChangeEvent, Dispatch, SetStateAction, useEffect } from 'react';

import cn from '../utilities/cn';

export type TOption = {
	optionId: string;
	optionText: string;
	isCorrect: boolean;
	questionId: string;
};

const Option = ({
	optionText,
	optionId,
	isCorrect,
	questionId,
	index,
	isSubmitted,
	checked,
	onSelectHandler,
	setAnswerIsCorrect,
}: TOption & {
	index: number;
	isSubmitted: boolean;
	checked: string | undefined;
	onSelectHandler: (e: ChangeEvent<HTMLInputElement>) => void;
	setAnswerIsCorrect: Dispatch<SetStateAction<boolean>>;
}) => {
	const isSelected = checked ? checked === optionId : false;
	useEffect(() => {
		if (isSelected && isCorrect) {
			setAnswerIsCorrect(true);
		}
	}, [isCorrect, isSelected, setAnswerIsCorrect]);

	return (
		<li>
			<input
				type='radio'
				id={optionId}
				name={questionId}
				value={optionId}
				className='hidden peer'
				required
				onChange={onSelectHandler}
				disabled={isSubmitted}
			/>
			<label
				htmlFor={optionId}
				className={cn(
					'inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100',
					{
						'border-green-600 peer-checked:border-green-600 peer-checked:text-green-600 text-green-600 hover:text-green-600':
							isSubmitted && isCorrect,
						'border-red-600 peer-checked:border-red-600 peer-checked:text-red-600 text-red-600 hover:text-red-600':
							isSubmitted && !isCorrect && isSelected,
					}
				)}>
				<div className='block'>
					<div className='w-full'>
						{index + 1}. {optionText}
					</div>
				</div>
			</label>
		</li>
	);
};

export default Option;
