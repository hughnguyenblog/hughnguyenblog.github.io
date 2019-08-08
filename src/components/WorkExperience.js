import React, { Component } from 'react';
import styled from 'styled-components';

import Slide from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';

export class WorkExperience extends Component {
	render() {
		return (
			<WEWrapper>
				<div className="container py-4">
					<Tada>
						<h1 className="title text-center ">Work Experience</h1>
					</Tada>
					<ul className="timeline pb-3">
						<li>
							<Slide right duration={500}>
								<br />
								<samp>Sep 2017 - Feb 2018</samp>
								<h3>Bitcode Technology HCMC</h3>
								<em>Junior Front-End Dev</em>
								<hr style={{ borderColor: 'ghostwhite' }} />
								<ul>
									<li>
										Studied and worked with HTML 5, CSS 3, Bootstrap 4, Jquery and ReactJS for
										highly custom builds.
									</li>
									<li>Use GIT to manage Repositories.</li>

									<li>
										Worked on print projects such as: packaging, layout, stationary, posters and
										branding.
									</li>
									<li>
										Hand-on in some modules of real projects (<a href="http://ngochajaderiver.com/"> Ngoc Ha Jade River</a>{' '}
										, <a href="http://tuonglaifoods.vn/">Tương Lai Food </a>, ... ).
									</li>
								</ul>
							</Slide>
						</li>

						<li>
							<Slide right duration={500}>
								<br />
								<samp>Feb 2019 - Now</samp>
								<h3>Seft Study & Part-time Coffee Store</h3>
								<em>
									Reviewed all knowledge of HTML 5, CSS 3, Bootstrap 4, Jquery and ReactJS after
									almost 1-year gap.
								</em>
								<hr style={{ borderColor: 'ghostwhite' }} />
								<p>Demonstrates:</p>
								<ul>
									<li>
										Background Gradient Generator ( Bootstrap + Jquery ) :{' '}
										<a href="https://d40ns.codesandbox.io/">Demo</a>
										<ul>
											<li>
												Use Jquery + Bootstrap to Work with HTML-DOM, ... (
												<a href="https://codesandbox.io/s/static-d40ns">Source Code</a>)
											</li>
										</ul>
									</li>

									<br />
									<li>
										Todo List (Pure React) : <a href="https://kvdgr.codesandbox.io/">Demo</a>
										<ul>
											<li>
												Learn How to pass data from Statefull Component to Stateless Component
												through State -> Props.
											</li>
											<li>
												Handle & Filter value, Undo & Delete actions, .... (<a href="https://codesandbox.io/s/todolist-kvdgr?fontsize=14">Source Code</a>)
											</li>
										</ul>
									</li>
									<br />
									<li>
										Todo List ( React + Redux ) : <a href="https://jlmwg.codesandbox.io/">Demo</a>
										<br />
										<ul>
											<li>
												Learn How to use Redux ( Store, Action Creator, Reducers, Dispatch ).
											</li>
											<li>
												Create Store, Create Action Creator, pass Actions to Reducers, use
												Reducers dispatch Actions to update State.
											</li>
											<li>
												Handle & Filter value, Undo & Delete actions, .... (
												<a href="https://codesandbox.io/s/github/hughnguyenblog/todo-list-with-react-redux/tree/master/?fontsize=14">
													Source Code
												</a>
												)
											</li>
										</ul>
									</li>
									<br />
									<li>
										Blog Page ( React + Redux ( Redux-Thunk ) + React-Router ) :{' '}
										<a href="https://tzmy1.codesandbox.io/">Demo</a>
										<br />
										<ul>
											<li>
												Learn How to use Redux Thunk (Middleware Redux) to GET State & Data from
												API.
											</li>
											<li>Learn How to create Pagination combine React-Router.</li>
											<li>
												Filter method on Search (
												<a href="https://codesandbox.io/s/github/hughnguyenblog/blog-react-redux">
													Source Code
												</a>
												)
											</li>
										</ul>
									</li>
									<br />
									<li>
										Product Store ( React + Redux ( Redux-Thunk ) + React-Router ) :{' '}
										<a href="https://w654l.codesandbox.io/">Demo</a>
										<br />
										<ul>
											<li>Filter Search products method, AddToCart method, BackDrop actions</li>
											<li>
												Modified Data from API ({' '}
												<a href="https://codesandbox.io/s/github/hughnguyenblog/product-store">
													Source Code
												</a>{' '}
												)
											</li>
										</ul>
									</li>
								</ul>
							</Slide>
						</li>
						<li />
					</ul>
				</div>
			</WEWrapper>
		);
	}
}

const WEWrapper = styled.section`
	z-index: 5 !important;
	color: ghostwhite;
	background-color: #252827;
	height: 100%;
	width: 100%;
	overflow: hidden;
	ul.timeline {
		list-style-type: none;
		position: relative;
		text-align: left;
		font-size: 1.3rem;
		padding-left: 1rem;
	}
	ul.timeline:before {
		content: '';
		background: crimson;
		display: inline-block;
		position: absolute;
		left: 29px;
		width: 4px;
		height: 100%;
		z-index: 400;
	}
	ul.timeline > li {
		margin: 2rem 2rem;
		li {
			font-family: var(--fontText);
			list-style-type: square;
			li {
				font-size: 0.97rem;
			}
			a {
				text-decoration: none;
				color: #e66156;
			}
		}
	}
	ul.timeline > li:before {
		content: '';
		background: ghostwhite;
		display: inline-block;
		position: absolute;
		border-radius: 50%;
		border: 4px solid crimson;
		left: 20px;
		width: 20px;
		height: 20px;
		z-index: 400;
	}
`;

export default WorkExperience;
