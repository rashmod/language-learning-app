import { Routes, Route, useBeforeUnload } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useCallback } from 'react';
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

function App() {
	const {
		userId,
		setUserId,
		languageId,
		setLanguageId,
		setDefaultLanguageId,
	} = useGlobalState();

	const { data: languagesData } = useQuery({
		queryKey: ['languages'],
		queryFn: getAllLanguages,
	});

	const beforeUnload = useCallback(() => {
		if (userId) localStorage.setItem('userId', userId);
		if (languageId) localStorage.setItem('languageId', languageId);
	}, [languageId, userId]);

	useBeforeUnload(beforeUnload);

	useEffect(() => {
		const localUserId = localStorage.getItem('userId');
		const localLanguageId = localStorage.getItem('languageId');

		setDefaultLanguageId(languagesData?.data[0].languageId || '');
		if (!userId && localUserId !== null) setUserId(localUserId);
		if (!languageId && localLanguageId !== null)
			setLanguageId(localLanguageId);
		if (!languageId && !localLanguageId)
			setLanguageId(languagesData?.data[0].languageId || '');
	}, [
		languageId,
		setLanguageId,
		userId,
		setUserId,
		languagesData,
		setDefaultLanguageId,
	]);

	return (
		<h1 className='flex flex-col items-center min-h-screen'>
			<div className='flex flex-col w-10/12 pb-8 grow'>
				<Navbar />
				<Routes>
					<Route path='/' element={<LeaderBoard />} />
					<Route
						path='/language'
						element={
							<AuthRoute>
								<TestList />
							</AuthRoute>
						}
					/>
					<Route
						path='/test/:testName'
						element={
							<AuthRoute>
								<NavigationContextProvider>
									<TestPage />
								</NavigationContextProvider>
							</AuthRoute>
						}
					/>
					<Route
						path={'/test/Infinity and beyond'}
						element={
							<AuthRoute>
								<NavigationContextProvider>
									<InfiniteTestPage />
								</NavigationContextProvider>
							</AuthRoute>
						}
					/>
					<Route
						path={'/me'}
						element={
							<AuthRoute>
								<ProfilePage />
							</AuthRoute>
						}
					/>
					<Route
						path={'/me/edit'}
						element={
							<AuthRoute>
								<EditProfilePage />
							</AuthRoute>
						}
					/>
					<Route path='/sign-up' element={<SignUp />} />
					<Route path='/sign-in' element={<SignIn />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<ToastContainer />
			</div>
		</h1>
	);
}

export default App;
