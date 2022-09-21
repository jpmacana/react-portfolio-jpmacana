/* eslint-disable react/jsx-no-target-blank */
import React, { useRef } from 'react';
import './Contact.css';
import { RiMailOpenFill } from 'react-icons/ri';
import { FaTwitter } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaFacebookMessenger } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			'service_o03trzv',
			'template_fxpi4wq',
			form.current,
			'8TFlsAVjJoByR3iC6',
		);

		e.target.reset();
	};

	return (
		<section id="contact">
			<h5>Get it Touch</h5>
			<h2>Contact Me 😁</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="article contact__option">
						<RiMailOpenFill alt="icon email" className="contact__opcion-icon" />
						<h4>Email</h4>
						<h5>jpsenatra@gmail.com</h5>
						<a href="mailto:jpsenatra@gmail.com" target="_blank">
							Enviar mensaje
						</a>
					</article>
					<article className="article contact__option">
						<IoLogoWhatsapp
							alt="icon whatsapp"
							className="contact__opcion-icon"
						/>
						<h4>Whatsapp</h4>
						<h5>+5492615711988</h5>
						<a
							href="https://api.whatsapp.com/send?phone=5492615711988"
							target="_blank"
						>
							Enviar mensaje
						</a>
					</article>
					<article className="article contact__option">
						<FaFacebookMessenger
							alt="icon instagram"
							className="contact__opcion-icon"
						/>
						<h4>Messenger</h4>
						<h5>Juan Pablo Senatra</h5>
						<a href="https://m.me/jpmacana" target="_blank">
							Enviar mensaje
						</a>
					</article>
					<article className="article contact__option">
						<FaTwitter alt="icon twitter" className="contact__opcion-icon" />
						<h4>Twitter</h4>
						<h5>jpmacana</h5>
						<a href="https://twitter.com/jpsenatra" target="_blank">
							Enviar mensaje
						</a>
					</article>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Ingrese su Nombre completo"
						required
					/>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Ingrese su correo"
						required
					/>
					<textarea
						name="message"
						id="message"
						rows="7"
						placeholder="Ingrese su consulta"
						required
					/>
					<button type="submit" className="btn btn-primary">
						Enviar mensaje
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
