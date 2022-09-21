/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import imgPi from '../../assets/pi-videogames-main-nine.vercel.app.png';
import imgPe from '../../assets/peliculas-app-macana.vercel.app.png';
import './Portfolio.css';

const data = [
	{
		id: 1,
		image: imgPi,
		title: 'PI - Videogames',
		github: 'https://github.com/jpmacana/PI-Videogames-main',
		demo: 'http://pi-videogames-main-nine.vercel.app/',
	},

	{
		id: 2,
		image: imgPe,
		title: 'Buscador de Peliculas',
		github: 'https://github.com/jpmacana/peliculas-app-macana',
		demo: 'https://peliculas-app-macana.vercel.app/',
	},
];

const Porftolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{data.map(({ id, image, title, github, demo }) => {
					return (
						<article key={id} className="portfolio__item">
							<div className="portfolio__item-image">
								<img src={image} alt="Image of PI Videogames" />
							</div>

							<h3>{title}</h3>
							<div className="portfolio__item-cta">
								<a
									href={demo}
									className="btn btn-primary"
									target="_blank"
									rel="noreferrer"
								>
									Demo
								</a>
								<a
									href={github}
									className="btn"
									target="_blank"
									rel="noreferrer"
								>
									Github
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};
export default Porftolio;
