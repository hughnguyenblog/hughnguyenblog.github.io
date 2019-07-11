import React, { Component } from 'react';
import styled from 'styled-components';

import reactIcon from '../image/React-And-React-Redux-Logo.12de94b0.png';
import photoshopIcon from '../image/ps.svg';
import htmlcss from '../image/html&css.svg';
import bootstrap from '../image/bootstrap.png';

import Tada from 'react-reveal/Tada';
import RubberBand from 'react-reveal/RubberBand';

export class Skill extends Component {
	render() {
		return (
			<SkillWrapper>
				<div className="container py-4">
					<Tada>
						<h1 className="title text-center">Skill Set</h1>
					</Tada>
					<div className="skillSet text-center">
						<div className="row">
							<div className="col-md-6 col-sm-12">
								<ul>
									<RubberBand>
										<li>
											<div style={{ width: '10vh', marginRight: '1.5rem' }}>
												<img style={{ width: '100%' }} src={htmlcss} alt="React-Redux-Icon" />
											</div>
											<div style={{ width: '100%' }}>
												<div
													className="d-flex"
													style={{ alignItems: 'baseline', justifyContent: 'space-between' }}
												>
													<h4>
														HTML5 + CSS3{' '}
														<small className="text-muted lead ">~ 1 Year</small>
													</h4>

													<strong style={{ textAlign: 'right' }}>90%</strong>
												</div>

												<div className="progress">
													<div
														className="progress-bar"
														style={{
															width: '90%',
															background: 'linear-gradient( to right, #e44f26, #33a9dc)'
														}}
													/>
												</div>
											</div>
										</li>
									</RubberBand>
									<RubberBand delay={300}>
										<li>
											<div style={{ width: '10vh', marginRight: '1.5rem' }}>
												<img style={{ width: '100%' }} src={bootstrap} alt="React-Redux-Icon" />
											</div>
											<div style={{ width: '100%' }}>
												<div
													className="d-flex"
													style={{ alignItems: 'baseline', justifyContent: 'space-between' }}
												>
													<h4>
														Bootstrap 4 + Jquery{' '}
														<small className="text-muted lead ">~ 1 Year</small>
													</h4>

													<strong style={{ textAlign: 'right' }}>90%</strong>
												</div>

												<div className="progress">
													<div
														className="progress-bar"
														style={{
															width: '90%',
															background: ' linear-gradient( to left, #800080, #49577F)'
														}}
													/>
												</div>
											</div>
										</li>
									</RubberBand>
								</ul>
							</div>
							<div className="col-md-6 col-sm-12">
								<ul>
									<RubberBand delay={600}>
										<li>
											<div style={{ width: '10vh', marginRight: '1.5rem' }}>
												<img style={{ width: '100%' }} src={reactIcon} alt="React-Redux-Icon" />
											</div>
											<div style={{ width: '100%' }}>
												<div
													className="d-flex"
													style={{ alignItems: 'baseline', justifyContent: 'space-between' }}
												>
													<h4>
														React + Redux{' '}
														<small className="text-muted lead ">5 months</small>
													</h4>

													<strong style={{ textAlign: 'right' }}>60%</strong>
												</div>
												<div className="progress">
													<div
														className="progress-bar"
														style={{
															width: '60%',
															background: 'linear-gradient( to right, #61d5f8, #754abc)'
														}}
													/>
												</div>
											</div>
										</li>
									</RubberBand>
									<RubberBand delay={900}>
										<li>
											<div style={{ width: '10vh', marginRight: '1.5rem' }}>
												<img
													style={{ width: '100%' }}
													src={photoshopIcon}
													alt="React-Redux-Icon"
												/>
											</div>
											<div style={{ width: '100%' }}>
												<div
													className="d-flex"
													style={{ alignItems: 'baseline', justifyContent: 'space-between' }}
												>
													<h4>
														Photoshop <small className="text-muted lead ">3-4 months</small>
													</h4>

													<strong style={{ textAlign: 'right' }}>50%</strong>
												</div>

												<div className="progress">
													<div
														className="progress-bar"
														style={{
															width: '50%',
															background: 'linear-gradient( to right, #00ffff, #0080ff)'
														}}
													/>
												</div>
											</div>
										</li>
									</RubberBand>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</SkillWrapper>
		);
	}
}
const SkillWrapper = styled.section`
	background-color: ghostwhite;
	margin: 0;
	padding: 0;
	height: 100%;
	width: 100%;
	.progress {
		box-shadow: 1.5px 3px #888;
	}
	ul {
		padding: 0;
		li {
			display: flex;
			margin: 3rem 2rem 3rem 0;
			h4 {
				font-family: var(--fontText);
			}
			small {
				font-size: 1rem;
			}
		}
	}
`;

export default Skill;
