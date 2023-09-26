import { Routes, Route } from 'react-router-dom';

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
			</div>
		</h1>
	);
}

export default App;
