import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';
import Porftolio from './components/Portfolio/Porftolio';
// import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<div>
			<Header />
			<Nav />
			<About />
			<Experience />
			<Services />
			<Porftolio />
			{/*<Testimonials />
			 */}
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
