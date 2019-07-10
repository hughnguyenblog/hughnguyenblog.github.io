import React, { Component } from 'react';
import styled from 'styled-components';

import hexagon from '../image/hexagon.png';
import hexagon2 from '../image/hexagon2.png';
import avatar from '../image/avatar.png';
import logobrand from '../image/logobrand.png';

import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

export class About extends Component {
	render() {
		return (
			<AboutWrapper>
				<div className="container">
					<Fade top cascade delay={1200} duration={800}>
						<div className="bar">
							<img alt="logobrand" src={logobrand} style={{ height: '100%', margin: '15px 0 0 0' }} />
							<span>
								<a href="/">Hugh Nguyen</a>
								<p>Front-End Developer</p>
							</span>
						</div>
					</Fade>

					<div className="intro row no-gutters my-4 ">
						<Flip cascade duration={1600}>
							<div className="col col-lg-6 col-md-6 col-12 avatar ">
								<img alt="avatar" src={avatar} style={{ width: '100%' }} />
							</div>
						</Flip>

						<div className="col col-lg-6 col-md-6 col-12 info px-5">
							<Fade left delay={1300} duration={1000}>
								<h1> I'm Hugh</h1>
								<p>
									I'm a Junior Front-End Developer <strong>@ HCM City-Vietnam.</strong>
									<br />
									I graduated from <strong>PTIT</strong>{' '}
									{'(Posts and Telecommunications Institute of Technology)'} with major{' '}
									<strong>Information Technology</strong> in 2017.<br />
									A <strong>Coder</strong>, a <strong>Travel Lover</strong> and a{' '}
									<strong>Blogger.</strong>
								</p>
							</Fade>
						</div>
					</div>

					<div>
						<Flip top duration={1100} delay={1500}>
							<img alt="avatar" src={hexagon} style={{ width: '40%' }} className="img2" />
						</Flip>
						<Flip>
							<img alt="avatar" src={hexagon2} className="img3" />
						</Flip>
					</div>
				</div>
			</AboutWrapper>
		);
	}
}

const AboutWrapper = styled.section`
	background-color: ghostwhite;
	height: 100%;
	width: 100%;
	overflow: hidden;
	padding-bottom: 4.5rem;
	.avatar {
		z-index: 100 !important;
		filter: drop-shadow(10px 5px 10px #888);
	}
	.bar {
		height: 10vh;
		padding-left: 3rem;
		padding-top: 2rem;
		display: flex;
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
			font-size: 1.5rem;
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
		bottom: 20vw;
		right: 1vh;
		z-index: 1 !important;
	}

	@media (min-width: 1025px) and (max-width: 1800px) {
		position: relative;
		height: 100vh;
		.bar {
			height: 10vh;
		}
		.info {
			margin-top: 6rem;
			h1 {
				text-align: start;
			}
		}
		.img2 {
			display: block;
			position: absolute;
			bottom: -20vw;
			right: -12vw;
		}
		.img3 {
			width: 25%;
			display: block;
			position: absolute;
			top: -8.5vw;
			right: 22vw;
		}
	}
`;

export default About;
