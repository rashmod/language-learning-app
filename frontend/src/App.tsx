import { Routes, Route, useBeforeUnload } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import TestPage from './pages/TestPage';
import { NavigationContextProvider } from './context/navigationContext';
import { useEffect } from 'react';
import { useGlobalState } from './context/globalContext';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import LeaderBoard from './pages/LeaderBoard';

function App() {
	const { userId, setUserId, languageId, setLanguageId } = useGlobalState();

	console.log(userId);

	useBeforeUnload(() => {
		if (userId) localStorage.setItem('userId', userId);
		if (languageId) localStorage.setItem('languageId', languageId);
	});

	useEffect(() => {
		const localUserId = localStorage.getItem('userId');
		const localLanguageId = localStorage.getItem('languageId');

		// console.log({ localUserId, localLanguageId });

		if (!userId && localUserId !== null) setUserId(localUserId);
		if (!languageId && localLanguageId !== null)
			setLanguageId(localLanguageId);
	}, [userId, setUserId, languageId, setLanguageId]);

	// console.log({ userId, languageId });

	return (
		<h1 className='flex flex-col items-center min-h-screen'>
			<div className='w-10/12 grow'>
				<Navbar />
				<Routes>
					<Route path='/' element={<LeaderBoard />} />
					<Route path='/language/:languageName' element={<Home />} />
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
