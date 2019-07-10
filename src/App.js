import React, { Component } from 'react';

import './App.css';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';

class App extends Component {
	render() {
		return (
			<div>
				<About />
				<WorkExperience />
				<Skill />
				<Blog />
				<Contact />
				<Footer />
			</div>
		);
	}
}

export default App;
