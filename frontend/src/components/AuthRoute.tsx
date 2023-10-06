import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useGlobalState } from '../context/globalContext';

const AuthRoute = () => {
	const { userId } = useGlobalState();
	const location = useLocation();

	if (!userId) return <Navigate to='/sign-in' state={location} replace />;
	else return <Outlet />;
};

export default AuthRoute;
