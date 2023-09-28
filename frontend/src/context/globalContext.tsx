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
	defaultLanguageId: string;
	setDefaultLanguageId: Dispatch<SetStateAction<string>>;
};

export const GlobalContext = createContext<TGlobalContext | null>(null);

export function GlobalContextProvider({
	children,
}: {
	children: ReactElement;
}) {
	const [userId, setUserId] = useState('');
	const [languageId, setLanguageId] = useState('');
	const [defaultLanguageId, setDefaultLanguageId] = useState('');

	return (
		<GlobalContext.Provider
			value={{
				userId,
				setUserId,
				languageId,
				setLanguageId,
				defaultLanguageId,
				setDefaultLanguageId,
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
