import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
	return (
		<h1 className='flex flex-col items-center min-h-screen'>
			<div className='w-10/12 grow'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</div>
		</h1>
	);
}

export default App;
