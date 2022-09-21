import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const HeaderSocial = () => {
	return (
		<div className="header__socials">
			<a
				href="https://linkedin.com/in/jpsenatra"
				target="_blank"
				rel="noreferrer"
			>
				<FaLinkedin />
			</a>
			<a href="https://github.com/jpmacana" target="_blank" rel="noreferrer">
				<FaGithub />
			</a>

			<a href="https://instagram.com/jpmacana" target="_blank" rel="noreferrer">
				<AiFillInstagram />
			</a>
		</div>
	);
};

export default HeaderSocial;
