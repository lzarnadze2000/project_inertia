import React, { useState } from 'react';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';

const Header = () => {
	const links = [
		{ name: 'HOME', link: '/' },
		{ name: 'ABOUT', link: '/about' },
		{ name: 'SEARCH', link: '/search' },
		{ name: 'CONTACT US', link: '/contact' },
	];
	const [open, setOpen] = useState(false);
	return (
		<div className='shadow-md w-full'>
			<div className='md:flex justify-around items-center bg-white py-4 px-7'>
				<div
					className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800 z-10'>
					<span className='text-xl lg:text-3xl text-[#7c3a51] mr-1 pt-2'>
						<ion-icon name='logo-ionic'></ion-icon>
					</span>
					Inertia
				</div>

				<div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
					<ion-icon name={open ? 'close' : 'menu'}></ion-icon>
				</div>

				<ul
					className={`flex flex-col pt-5 md:pt-0 z-10 md:flex-row gap-5 lg:gap-8 md:items-center absolute md:pb-0 pb-12 md:static bg-white md:z-auto top-[72px] left-0 w-full md:w-auto md:pl-0 pl-8 transition-all duration-1000 ease-in-out ${
						open ? 'left-[0]' : 'left-[-100%] '
					}`}>
					<NavLinks links={links} />
					<div className='flex gap-3 md:ml-10'>
						<div className='rounded-3xl flex items-center justify-center min-w-max py-2 px-5 lg:ml-8 border-2 border-[#7c3a51] hover:bg-[#7c3a51] hover:text-white hover:shadow-[#7c3a51]/50 duration-300 text-[#7c3a51]'>
							<li className='lg:text-xl'>
								<Link to='/signin' className='text-[#7c3a51] hover:text-white duration-500'>
									Sign In
								</Link>
							</li>
						</div>
						<div className='rounded-3xl flex items-center justify-center min-w-max py-2 px-5 lg:ml-8 border-2 border-[#7c3a51] bg-[#7c3a51] text-black hover:bg-white duration-300'>
							<li className='lg:text-xl md:my-0'>
								<Link to='/signup ' className='text-white hover:text-[#7c3a51]  duration-500'>
									Sign Up
								</Link>
							</li>
						</div>
					</div>
				</ul>
			</div>
		</div>
	);
};

export default Header;