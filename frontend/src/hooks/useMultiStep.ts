import { useState } from 'react';

const useMultiStep = () => {
	const [currentStepIndex, setCurrentStepIndex] = useState(0);
	const [length, setLength] = useState(0);

	function goToNextPage() {
		setCurrentStepIndex((prev) => {
			if (prev >= length - 1) return prev;
			return prev + 1;
		});
	}

	function goToPreviousPage() {
		setCurrentStepIndex((prev) => {
			if (prev <= 0) return prev;
			return prev - 1;
		});
	}

	return {
		currentStepIndex,
		goToNextPage,
		goToPreviousPage,
		length,
		isFirstPage: currentStepIndex === 0,
		isLastPage: currentStepIndex === length - 1,
		setLength,
	};
};

export default useMultiStep;
