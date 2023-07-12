import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = ({ links }) => {
	return (
		<>
			{links.map((link) => (
				<li key={link.name} className='lg:text-xl min-w-max md:my-0 '>
					<Link to={link.link} className='text-gray-800 hover:text-indigo-600 duration-500 decoration-indigo-500'>
						{link.name}
					</Link>
				</li>
			))}
		</>
	);
};

export default NavLinks;