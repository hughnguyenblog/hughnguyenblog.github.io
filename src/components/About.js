import React, { Component } from 'react';
import styled from 'styled-components';

import hexagon from '../image/hexagon.png';
import hexagon2 from '../image/hexagon2.png';
import avatar from '../image/avatar.png';

import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

export class About extends Component {
	render() {
		return (
			<AboutWrapper>
				<div className="container">
					<Fade top delay={300}>
						<nav>
							<a href="/">Hugh Nguyen</a>
							<p>Front-End Developer</p>
						</nav>
					</Fade>
					<div className="intro row no-gutters my-4 ">
						<div className="col col-lg-6 col-md-6 col-12 avatar ">
							<Fade left delay={500}>
								<img alt="avatar" src={avatar} style={{ width: '100%' }} />
							</Fade>
						</div>
						<Fade left delay={1000}>
							<div className="col col-lg-6 col-md-6 col-12 info px-5">
								<h1> I'm Hugh</h1>
								<br />
								<p>
									I'm a Junior Front-End Developer <strong>@ HCMC - Vietnam.</strong>
									<br />
									I graduated from <strong>PTIT</strong>{' '}
									{'(Posts and Telecommunications Institute of Technology)'} with major{' '}
									<strong>Information Technology</strong> in 2017.<br />
									A <strong>Coder</strong>, a <strong>Travel Lover</strong> and a{' '}
									<strong>Blogger.</strong>
								</p>
							</div>
						</Fade>
					</div>
					<Flip left cascade duration={1300}>
						<div>
							<img alt="avatar" src={hexagon} style={{ width: '40%' }} className="img2" />
							<img alt="avatar" src={hexagon2} className="img3" />
						</div>
					</Flip>
				</div>
			</AboutWrapper>
		);
	}
}

const AboutWrapper = styled.section`
	background-color: ghostwhite;
	height: 100%;
	width: 100%;
	transition: all 0.5s ease-in-out;
	overflow: hidden;
	padding-bottom: 4rem;
	.avatar {
		filter: drop-shadow(10px 5px 5px #888);
	}
	nav {
		height: 10vh;
		padding-left: 2rem;
		padding-top: 1rem;
		a {
			font-family: 'Noticia Text', serif;
			color: var(--mainBlack);
			text-decoration: none;
			font-size: 2rem;
			font-weight: bold;
		}
		p {
			font-family: 'Noticia Text', serif;
			font-style: italic;
		}
	}
	.intro {
		width: 100%;
		justify-content: center;
		.info {
			z-index: 2 !important;
		}
		h1 {
			font-family: 'Noticia Text', serif;
			text-align: center;
		}
		p {
			font-family: var(--fontTitle);
		}
	}
	.img2 {
		display: none;
	}
	.img3 {
		width: 70%;
		position: absolute;
		top: 70vh;
		right: 1vh;
		z-index: 1 !important;
	}

	@media (min-width: 768px) and (max-width: 1800px) {
		position: relative;
		nav {
			padding: 2rem;
		}
		.info {
			margin-top: 12%;
			h1 {
				text-align: start;
			}
		}
		.img2 {
			display: block;
			position: absolute;
			bottom: -18vw;
			right: -12vw;
		}
		.img3 {
			width: 20%;
			display: block;
			position: absolute;
			top: -5vw;
			right: 33vw;
		}
	}
`;

export default About;
