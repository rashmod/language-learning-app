import {
	Dispatch,
	ReactElement,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react';

type TGlobalContext = {
	userId: string;
	setUserId: Dispatch<SetStateAction<string>>;
	languageId: string;
	setLanguageId: Dispatch<SetStateAction<string>>;
};

export const GlobalContext = createContext<TGlobalContext | null>(null);

export function GlobalContextProvider({
	children,
}: {
	children: ReactElement;
}) {
	const [userId, setUserId] = useState('');
	const [languageId, setLanguageId] = useState(
		'7be440ed-2f8f-4c3f-99d0-74492549ce7c'
	);

	return (
		<GlobalContext.Provider
			value={{
				userId,
				setUserId,
				languageId,
				setLanguageId,
			}}>
			{children}
		</GlobalContext.Provider>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useGlobalState() {
	const context = useContext(GlobalContext);
	if (!context) {
		throw new Error(
			'useGlobalState must be used within the GlobalContextProvider'
		);
	}
	return context;
}
