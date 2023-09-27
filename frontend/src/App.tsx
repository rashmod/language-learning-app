import { Routes, Route, useBeforeUnload } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useCallback } from 'react';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import TestPage from './pages/TestPage';
import { NavigationContextProvider } from './context/navigationContext';
import { useGlobalState } from './context/globalContext';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import LeaderBoard from './pages/LeaderBoard';

function App() {
	const { userId, setUserId, languageId, setLanguageId } = useGlobalState();

	const beforeUnload = useCallback(() => {
		if (userId) localStorage.setItem('userId', userId);
		if (languageId) localStorage.setItem('languageId', languageId);
	}, [languageId, userId]);

	useBeforeUnload(beforeUnload);

	useEffect(() => {
		const localUserId = localStorage.getItem('userId');
		const localLanguageId = localStorage.getItem('languageId');

		if (!userId && localUserId !== null) setUserId(localUserId);
		if (!languageId && localLanguageId !== null)
			setLanguageId(localLanguageId);
		if (!languageId && !localLanguageId)
			setLanguageId('7be440ed-2f8f-4c3f-99d0-74492549ce7c');
	}, [languageId, setLanguageId, userId, setUserId]);

	return (
		<h1 className='flex flex-col items-center min-h-screen'>
			<div className='w-10/12 pb-8 grow'>
				<Navbar />
				<Routes>
					<Route path='/' element={<LeaderBoard />} />
					<Route path='/language' element={<Home />} />
					<Route
						path='/test/:testName'
						element={
							<NavigationContextProvider>
								<TestPage />
							</NavigationContextProvider>
						}
					/>
					<Route path='/sign-up' element={<SignUp />} />
					<Route path='/sign-in' element={<SignIn />} />
				</Routes>
				<ToastContainer />
			</div>
		</h1>
	);
}

export default App;
