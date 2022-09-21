/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import logo from '../../assets/logo.png';
import { SiFacebook } from 'react-icons/si';
import { SiTwitter } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
	return (
		<footer>
			<a href="#" className="footer__logo">
				Scroll Up ⏫
			</a>

			<img src={logo} alt="" className="logo" />

			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">Acerca de mi</a>
				</li>
				<li>
					<a href="#experience">Experiencias</a>
				</li>
				<li>
					<a href="#servics">Servicios</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#contact">Contacto</a>
				</li>
			</ul>

			<div className="footer__socials">
				<a href="https://www.facebook.com/jpmacana">
					<SiFacebook />
				</a>

				<a href="https://twitter.com/jpsenatra">
					<SiTwitter />
				</a>

				<a href="https://www.instagram.com/jpmacana">
					<SiInstagram />
				</a>
			</div>

			<div className="footer__copyright">
				<small>&copy; JPMACANA All rights reserved. </small>
			</div>
		</footer>
	);
};

export default Footer;
