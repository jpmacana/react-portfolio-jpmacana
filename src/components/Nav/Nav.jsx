/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Nav.css';
import { RiHomeFill } from 'react-icons/ri';
import { MdPersonPin } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { MdAccountBox } from 'react-icons/md';
import { RiServiceFill } from 'react-icons/ri';
import { BsFillWalletFill } from 'react-icons/bs';
import { useState } from 'react';

const Nav = () => {
	const [activeNav, setActiveNav] = useState('');

	return (
		<nav>
			<a href="#" className={activeNav === '#' ? 'active' : ''}>
				<RiHomeFill />
			</a>
			<a
				href="#about"
				onClick={() => setActiveNav('#about')}
				className={activeNav === '#about' ? 'active' : ''}
			>
				<MdPersonPin />
			</a>
			<a
				href="#experience"
				onClick={() => setActiveNav('#experience')}
				className={activeNav === '#experience' ? 'active' : ''}
			>
				<BsFillWalletFill />
			</a>
			<a
				href="#services"
				onClick={() => setActiveNav('#services')}
				className={activeNav === '#services' ? 'active' : ''}
			>
				<RiServiceFill />
			</a>
			<a
				href="#portfolio"
				onClick={() => setActiveNav('#portfolio')}
				className={activeNav === '#portfolio' ? 'active' : ''}
			>
				<MdWork />
			</a>
			<a
				href="#contact"
				onClick={() => setActiveNav('#contact')}
				className={activeNav === '#contact' ? 'active' : ''}
			>
				<MdAccountBox />
			</a>
		</nav>
	);
};

export default Nav;
