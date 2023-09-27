import { ReactElement } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useGlobalState } from '../context/globalContext';

const AuthRoute = ({ children }: { children: ReactElement }) => {
	const { userId } = useGlobalState();
	const navigate = useNavigate();
	const location = useLocation();

	if (!userId) {
		navigate('/sign-in', { state: { location }, replace: true });
		return;
	}
	return children;
};

export default AuthRoute;
