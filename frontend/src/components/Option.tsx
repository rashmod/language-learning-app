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
}: TOption & { index: number }) => {
	return (
		<li>
			<input
				type='radio'
				id={optionId}
				name={questionId}
				defaultValue={optionText}
				className='hidden peer'
				required
			/>
			<label
				htmlFor={optionId}
				className='inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100'>
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
