import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Card = () => {
	return (
		<div>
			<div className='card flex justify-center'>
				<div className='flex flex-col md:flex-row md:max-w-xl m-5 rounded-lg bg-white shadow-lg'>
					<img
						className=' w-full h-96 md:h-auto object-cover
                        md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg su:h-24'
						src='https://corlettexpress.com/wp-content/uploads/2021/03/AdobeStock_132802484-scaled-1646x823.jpeg'
						alt='product img'
					/>
					<div className='p-6 flex flex-col justify-start'>
						<h5 className='text-gray-900 text-xl font-medium mb-2'>Service</h5>
						<p className='text-gray-700 text-base mb-4'>
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This content is a little bit
							longer.
						</p>
						<Link to='/check-costs'>
							<button className='text-white bg-blue-500 shadow-lg text-xs p-3 rounded-lg hover:bg-blue-700 '>
								Check Cost and Destinations
							</button>
						</Link>
					</div>
				</div>
			</div>
			;
		</div>
	);
};

export default Card;
