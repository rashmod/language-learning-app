import {
	Dispatch,
	ReactElement,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react';
import useMultiStep from '../hooks/useMultiStep';

type TNavigationContext = {
	currentStepIndex: number;
	goToNextPage: () => void;
	goToPreviousPage: () => void;
	isFirstPage: boolean;
	isLastPage: boolean;
	length: number;
	setLength: Dispatch<SetStateAction<number>>;
	rightOffset: number;
	setRightOffset: Dispatch<SetStateAction<number>>;
};

export const NavigationContext = createContext<TNavigationContext | null>(null);

export function NavigationContextProvider({
	children,
}: {
	children: ReactElement;
}) {
	const [rightOffset, setRightOffset] = useState(0);

	const {
		currentStepIndex,
		goToNextPage,
		goToPreviousPage,
		isFirstPage,
		isLastPage,
		length,
		setLength,
	} = useMultiStep();

	return (
		<NavigationContext.Provider
			value={{
				currentStepIndex,
				goToNextPage,
				goToPreviousPage,
				isFirstPage,
				isLastPage,
				length,
				setLength,
				rightOffset,
				setRightOffset,
			}}>
			{children}
		</NavigationContext.Provider>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useNavigationState() {
	const context = useContext(NavigationContext);
	if (!context) {
		throw new Error(
			'useNavigationState must be used within the NavigationContextProvider'
		);
	}
	return context;
}
