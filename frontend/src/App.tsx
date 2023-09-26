import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import TestPage from './pages/TestPage';
import { NavigationContextProvider } from './context/navigationContext';

function App() {
	return (
		<h1 className='flex flex-col items-center min-h-screen'>
			<div className='w-10/12 grow'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/test/:testName'
						element={
							<NavigationContextProvider>
								<TestPage />
							</NavigationContextProvider>
						}
					/>
				</Routes>
				<ToastContainer />
			</div>
		</h1>
	);
}

export default App;
