/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import imgPi from '../../assets/pi-videogames-main-nine.vercel.app.png';
import imgPe from '../../assets/netflix-clone.png';
import imgWe from '../../assets/weather-app.png';
import imgMo from '../../assets/momemtum-app.png';
import imgTr from '../../assets/travel-app.png';
import imgTd from '../../assets/todo-app.png';
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
		title: 'Netflix Clone',
		github: 'https://github.com/jpmacana/netflix-clone-react-firebase',
		demo: 'https://netflix-clone-react-macana.web.app/',
	},

	{
		id: 3,
		image: imgWe,
		title: 'Weather App',
		github: 'https://github.com/jpmacana/weather-app-react-macana',
		demo: 'https://weather-app-macana.netlify.app',
	},
	{
		id: 4,
		image: imgMo,
		title: 'Momemtun App',
		github: 'https://github.com/jpmacana/momentum-clone',
		demo: 'https://momentum-clone-macana.vercel.app/',
	},
	{
		id: 5,
		image: imgTr,
		title: 'Travel World App',
		github: 'https://github.com/jpmacana/travel-world-app',
		demo: 'https://travel-world-app-jpmacana.vercel.app/',
	},
	{
		id: 6,
		image: imgTd,
		title: 'To Do App',
		github: 'https://github.com/jpmacana/to-do-react',
		demo: 'https://todo-macana-react.netlify.app/',
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
								<img src={image} alt={image} />
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
