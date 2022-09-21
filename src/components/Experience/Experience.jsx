import React from 'react';
import js from '../../assets/js.png';
import html from '../../assets/html.png';
import css from '../../assets/css3.png';
import boostrap from '../../assets/boostrap.png';
import react from '../../assets/react.png';
import redux from '../../assets/redux.png';
import tailwind from '../../assets/tailwind.png';
import nodejs from '../../assets/nodejs.png';
import postgres from '../../assets/Postgres.png';
import mysql from '../../assets/mysql.png';
import seq from '../../assets/seq.png';
import mongodb from '../../assets/mongodb.png';
import firabase from '../../assets/firabase.png';
import github from '../../assets/github.png';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './Experience.css';

const Experience = () => {
	return (
		<section id="experience">
			<h5>What's skills I have</h5>
			<h2>My experience</h2>

			<div className="container experience__container">
				<div className="experience__frontend">
					<h2>FrontEnd Development</h2>
					<div className="experience__content">
						<article className="experience__details">
							<div>
								<img src={js} alt="Js" className="img-icon" />
								<h4>Javascript</h4>
								<BsFillPatchCheckFill className="experience__details" />
								<small className="text-light"> Junior</small>
								<p>⭐⭐⭐⭐</p>
							</div>
							<div>
								<img src={html} alt="html" className="img-icon" />
								<h4>HTML5</h4>
								<BsFillPatchCheckFill className="experience__details" />

								<small className="text-light"> Junior</small>
								<p>⭐⭐⭐⭐</p>
							</div>

							<div>
								<img src={css} alt="Css" className="img-icon" />
								<h4>CSS3</h4>
								<BsFillPatchCheckFill className="experience__details" />
								<small className="text-light"> Junior</small>
								<p>⭐⭐⭐⭐</p>
							</div>
							<div>
								<img src={boostrap} alt="Boostrap" className="img-icon" />
								<h4>Boostrap</h4>
								<BsFillPatchCheckFill className="experience__details" />

								<small className="text-light"> Junior</small>
								<p>⭐⭐⭐⭐</p>
							</div>
							<div>
								<img src={react} alt="React" className="img-icon" />
								<h4>ReactJs</h4>
								<BsFillPatchCheckFill className="experience__details" />

								<small className="text-light"> Junior</small>
								<p>⭐⭐⭐⭐</p>
							</div>
							<div>
								<img src={redux} alt="Redux" className="img-icon" />
								<h4>Redux</h4>
								<BsFillPatchCheckFill className="experience__details" />

								<small className="text-light"> Junior</small>
								<p>⭐⭐⭐⭐</p>
							</div>

							<div>
								<img src={tailwind} alt="Tailwind" className="img-icon" />
								<h4>Tailwind CSS</h4>
								<BsFillPatchCheckFill className="experience__details" />

								<small className="text-light"> Trainee</small>
								<p>⭐⭐⭐</p>
							</div>
						</article>
					</div>
				</div>

				<div className="experience__backend">
					<h2>BackEnd Development</h2>
					<div className="experience__content">
						<article className="experience__details">
							<div>
								<img src={nodejs} alt="nodejs" className="img-icon" />
								<h4>NodeJs</h4>
								<BsFillPatchCheckFill className="experience__details" />

								<small className="text-light"> Junior</small>
								<p>⭐⭐⭐⭐</p>
							</div>
							<div>
								<img src={postgres} alt="postgres" className="img-icon" />
								<h4>Postgres</h4>
								<BsFillPatchCheckFill className="experience__details" />

								<small className="text-light"> Junior</small>
								<p>⭐⭐⭐⭐</p>
							</div>
							<div>
								<img src={mysql} alt="MySql" className="img-icon" />
								<h4>MySQL</h4>
								<BsFillPatchCheckFill className="experience__details" />

								<small className="text-light"> Junior</small>
								<p>⭐⭐⭐⭐</p>
							</div>
							<div>
								<img src={seq} alt="Sequelize" className="img-icon" />
								<h4>Sequelize</h4>
								<BsFillPatchCheckFill className="experience__details" />

								<small className="text-light"> Junior</small>
								<p>⭐⭐⭐⭐</p>
							</div>
							<div>
								<img src={github} alt="github" className="img-icon" />
								<h4>Github</h4>
								<BsFillPatchCheckFill className="experience__details" />
								<small className="text-light"> Junior</small>
								<p>⭐⭐⭐⭐</p>
							</div>
							<div>
								<img src={mongodb} alt="MongoDB" className="img-icon" />

								<h4>MongoDB</h4>
								<BsFillPatchCheckFill className="experience__details" />
								<small className="text-light"> Trainee</small>
								<p>⭐⭐⭐</p>
							</div>

							<div>
								<img src={firabase} alt="Firabase" className="img-icon" />
								<h4>FiraBase</h4>
								<BsFillPatchCheckFill className="experience__details" />

								<small className="text-light"> Trainee</small>
								<p>⭐⭐⭐</p>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
