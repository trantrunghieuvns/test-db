import { Route, Routes } from 'react-router-dom';
import Customers from './pages/Customers';
import Admin from './pages/Admin';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Admin />} />
				<Route path='/customers' element={<Customers />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
