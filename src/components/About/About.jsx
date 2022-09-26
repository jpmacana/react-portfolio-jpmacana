/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './About.css';
import aboutImage from '../../assets/aboutme.jpg';
import { FaAward } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
	return (
		<section id="about">
			<h5>Get to know</h5>
			<h2>About me</h2>
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={aboutImage} alt="About image" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>+3 years coding </small>
						</article>
						<article className="about__card">
							<FaUsers className="about__icon" />
							<h5>Clients</h5>
							<small> 2 </small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Proyects</h5>
							<small> +2 proyects </small>
						</article>
					</div>

					<div className="about__hi">
						<br />

						<p>
							I'm from Mendoza Argentina,my passions are
							tecnology,animals,football, listen music and watch movies and TV
							series.
						</p>
						<br />
						<p>
							Since I was little I was very curious and skillful about the
							devices and everything related to the tecnology. Then it appeared
							the curiosity for the hardware and the software, the SO, finally
							the Programming and the Web Development.
						</p>

						<br />
						<p>
							I have 2 pets, they are Schnauzers Mini their names are Tyrion and
							Enzo, they are father and son.
						</p>

						<p>
							I am a big fan of my futbol team River Plate 🤍❤️🤍, one of the
							names of my pets is because my childhood idol was Enzo
							Francescoli, and now one who is the best players in the present is
							Enzo Perez. And the another dog, his name was because my favorite
							character in Game of Thrones was Tyrion Lannister, his expressions
							reminded me of him. 😁
						</p>

						<br />

						<a href="#contact" className="btn btn-primary">
							Contactame 👍
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
