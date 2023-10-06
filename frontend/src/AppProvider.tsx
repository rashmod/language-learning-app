import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from './App.tsx';
import { GlobalContextProvider } from './context/globalContext.tsx';

const queryClient = new QueryClient();

const AppProvider = () => {
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<GlobalContextProvider>
					<App />
				</GlobalContextProvider>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</BrowserRouter>
	);
};

export default AppProvider;
