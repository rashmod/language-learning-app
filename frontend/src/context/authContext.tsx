import { createContext, ReactElement } from 'react';
import { useGlobalState } from './globalContext';
import LoadingComponent from '../components/LoadingComponent';

export const AuthContext = createContext(null);

export const AuthContextProvider = ({
	children,
}: {
	children: ReactElement;
}) => {
	const { userId } = useGlobalState();

	if (!userId)
		return (
			<div className='flex flex-col items-center min-h-screen'>
				<LoadingComponent />
			</div>
		);

	return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};
