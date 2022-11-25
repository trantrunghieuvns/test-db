import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Navbar = () => {
	const location = useLocation();
	const [color, setColor] = useState('gray');
	const [secondColor, setSecondColor] = useState('gray');
	useEffect(() => {
		location.pathname === '/customers' ? setColor('blue') : setColor('gray');
		location.pathname === '/' ? setSecondColor('blue') : setSecondColor('gray');
	}, [location]);
	//in real life we don't do REACT single page app for both admin and user, I suggest using Firebase for small or Digital Ocean for large scale app and set Access of the two, so from now on it's just for demo.
	return (
		<ul className='flex p-10'>
			<li className='flex-1 mr-2'>
				<a
					className={`text-center block border rounded py-2 px-4 bg-${secondColor}-500 hover:bg-blue-700 text-white`}
					href='/'>
					Admin Dashboard
				</a>
			</li>
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
