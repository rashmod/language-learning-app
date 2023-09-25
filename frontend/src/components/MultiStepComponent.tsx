import cn from '../utilities/cn';

export type TMultiStepComponent = {
	goToNextPage: () => void;
	goToPreviousPage: () => void;
	isFirstPage: boolean;
	isLastPage: boolean;
};

const MultiStepComponent = ({
	goToNextPage,
	goToPreviousPage,
	isFirstPage,
	isLastPage,
}: TMultiStepComponent) => {
	return (
		<div className='mt-8'>
			<div className='flex w-full gap-8'>
				<div className='flex justify-end grow'>
					<button
						onClick={goToPreviousPage}
						className={cn(
							'border border-gray-600 py-1 px-3 rounded hover:text-white hover:bg-black transition-all duration-200 w-24',
							{
								'text-gray-400 hover:text-gray-400 hover:bg-transparent border-gray-400':
									isFirstPage,
							}
						)}>
						Previous
					</button>
				</div>
				<div>
					<button
						className={cn(
							'border border-gray-600 py-1 px-3 rounded hover:text-white hover:bg-black transition-all duration-200 w-28',
							{
								'text-gray-400 hover:text-gray-400 hover:bg-transparent border-gray-400':
									false,
							}
						)}>
						Submit
					</button>
				</div>
				<div className='grow'>
					<button
						onClick={goToNextPage}
						className={cn(
							'border border-gray-600 py-1 px-3 rounded hover:text-white hover:bg-black transition-all duration-200 w-28',
							{
								'text-gray-400 hover:text-gray-400 hover:bg-transparent border-gray-400':
									isLastPage,
							}
						)}>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default MultiStepComponent;
