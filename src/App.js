import { Route, Routes } from 'react-router-dom';
import Customers from './pages/Customers';
import Admin from './pages/Admin';
function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Admin />} />
				<Route path='/customers' element={<Customers />} />
			</Routes>
		</div>
	);
}

export default App;
