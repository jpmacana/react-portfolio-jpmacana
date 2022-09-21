import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/transparent-bg-designify.png';
import HeaderSocial from './HeaderSocial';

const Header = () => {
	return (
		<header>
			<div className="container header__container">
				<h4>Hello! My name is... </h4>

				<h1>Juan Pablo Senatra</h1>
				<h3 className="text-light">Fullstack Developer</h3>
				<CTA />
				<HeaderSocial />

				<div className="me">
					<img src={ME} alt="Foto mia" />
				</div>

				<a href="#contact" className="scroll__down">
					Scroll down ▶️
				</a>
			</div>
		</header>
	);
};

export default Header;
