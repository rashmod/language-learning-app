import { Routes, Route, useBeforeUnload } from 'react-router-dom';
import { useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import Navbar from './components/Navbar';
import TestPage from './pages/TestPage';
import { NavigationContextProvider } from './context/navigationContext';
import { useGlobalState } from './context/globalContext';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import LeaderBoard from './pages/LeaderBoard';
import AuthRoute from './components/AuthRoute';
import NotFound from './pages/NotFound';
import TestList from './pages/TestList';
import InfiniteTestPage from './pages/InfiniteTestPage';
import { getAllLanguages } from './api/languages';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import ErrorToast from './components/ErrorToast';
import toastConfig from './config/toastConfig';
import { TApiErrorResponse } from './types/apiErrorResponse';
import { AuthContextProvider } from './context/authContext';

function App() {
	const {
		userId,
		setUserId,
		languageId,
		setLanguageId,
		setDefaultLanguageId,
	} = useGlobalState();

	const {
		data: languagesData,
		isError,
		error,
	} = useQuery({
		queryKey: ['languages'],
		queryFn: getAllLanguages,
	});

	const beforeUnload = useCallback(() => {
		if (!userId && !languageId) return;
		if (userId) localStorage.setItem('userId', userId);
		if (languageId) localStorage.setItem('languageId', languageId);
	}, [languageId, userId]);

	useBeforeUnload(beforeUnload);

	useEffect(() => {
		const localLanguageId = localStorage.getItem('languageId');
		if (languagesData?.success) {
			setDefaultLanguageId(languagesData.data[0].languageId || '');
			if (!languageId && localLanguageId !== null)
				setLanguageId(localLanguageId);
			if (!languageId && !localLanguageId)
				setLanguageId(languagesData.data[0].languageId || '');
		}
	}, [languageId, languagesData, setDefaultLanguageId, setLanguageId]);

	useEffect(() => {
		const localUserId = localStorage.getItem('userId');
		if (!userId && localUserId !== null) setUserId(localUserId);
	}, [userId, setUserId]);

	useEffect(() => {
		const responseData: TApiErrorResponse = error?.response?.data;
		if (isError && responseData) {
			toast.error(
				<ErrorToast
					message={responseData.message}
					title={responseData.error}
				/>,
				toastConfig
			);
		}
	}, [error, isError]);

	return (
		<div className='flex flex-col items-center min-h-screen'>
			<div className='flex flex-col w-10/12 pb-8 grow'>
				<Navbar />
				<Routes>
					<Route path='/' element={<LeaderBoard />} />
					<Route
						element={
							<AuthContextProvider>
								<AuthRoute />
							</AuthContextProvider>
						}>
						<Route path='/language' element={<TestList />} />
						<Route
							path='/test/:testName'
							element={
								<NavigationContextProvider>
									<TestPage />
								</NavigationContextProvider>
							}
						/>
						<Route
							path={'/test/Infinity and beyond'}
							element={
								<NavigationContextProvider>
									<InfiniteTestPage />
								</NavigationContextProvider>
							}
						/>
						<Route path={'/me'} element={<ProfilePage />} />
						<Route
							path={'/me/edit'}
							element={<EditProfilePage />}
						/>
					</Route>
					<Route path='/sign-up' element={<SignUp />} />
					<Route path='/sign-in' element={<SignIn />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<ToastContainer />
			</div>
		</div>
	);
}

export default App;
