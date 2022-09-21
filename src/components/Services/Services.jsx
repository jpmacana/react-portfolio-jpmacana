import React from 'react';
import './Services.css';
import { FaCheckCircle } from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';

const Services = () => {
	return (
		<section id="services">
			<h5>What I Offer</h5>
			<h2>Services</h2>

			<div className="container services__container">
				<article className="service">
					<div className="service__head">
						<h2>Designer</h2>
					</div>
					<ul className="service__list">
						<li>
							<FaCheckCircle className="service__list-icon" />
							<p>Simple Content Structure</p>
						</li>
						<li>
							<FaCheckCircle className="service__list-icon" />
							<p>Clean design patterns</p>
						</li>
						<li>
							<FaCheckCircle className="service__list-icon" />
							<p>Code things from scratch</p>
						</li>
						<br />
					</ul>
				</article>

				<article className="service">
					<div className="service__head">
						<h2>Frontend Developer</h2>
					</div>
					<ul className="service__list">
						<li>
							<FaTools className="service__list-icon" />
							<p>React</p>
						</li>
						<li>
							<FaTools className="service__list-icon" />
							<p>Visual Code</p>
						</li>
						<li>
							<FaTools className="service__list-icon" />
							<p>Boostrap</p>
						</li>
					</ul>
				</article>

				<article className="service">
					<div className="service__head">
						<h2>BackEnd Development</h2>
					</div>
					<ul className="service__list">
						<li>
							<FaTools className="service__list-icon" />
							<p>Postman</p>
						</li>
						<li>
							<FaTools className="service__list-icon" />
							<p>pgAdmin</p>
						</li>
						<li>
							<FaTools className="service__list-icon" />
							<p>Express</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
};

export default Services;
