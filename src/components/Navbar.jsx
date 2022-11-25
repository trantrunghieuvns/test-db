import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Navbar = () => {
	const location = useLocation();
	const [color, setColor] = useState('gray');
	const [secondColor, setSecondColor] = useState('gray');
	const [showDashboard, setShowDashBoard] = useState(true);
	useEffect(() => {
		location.pathname === '/customers' ? setColor('blue') : setColor('gray');
		location.pathname === '/' ? setSecondColor('blue') : setSecondColor('gray');
		location.pathname === '/customers'
			? setShowDashBoard(false)
			: setShowDashBoard(true);
	}, [location]);

	return (
		<ul className='flex p-10'>
			{showDashboard ? (
				<li className='flex-1 mr-2'>
					<a
						className={`text-center block border rounded py-2 px-4 bg-${secondColor}-500 hover:bg-blue-700 text-white`}
						href='/'>
						Admin Dashboard
					</a>
				</li>
			) : null}
			<li className='flex-1 mr-2'>
				<a
					className={`text-center block border rounded py-2 px-4 bg-${color}-500 hover:bg-blue-700 text-white`}
					href='/customers'>
					Customers Page
				</a>
			</li>
		</ul>
	);
};
