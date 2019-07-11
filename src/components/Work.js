import React, { Component } from 'react';
import styled from 'styled-components';

import jade from '../image/screen-shot-ngoc-ha-jade-river.jpg';
import todoP from '../image/ReactPure.PNG';
import todoRR from '../image/todoRR.PNG';
import blogP from '../image/blog.PNG';
import bgG from '../image/BGGenerator.PNG';
import food from '../image/tuonglai-foods.jpg';
import product from '../image/product.PNG';

import Slide from 'react-reveal/Slide';

export class Work extends Component {
	render() {
		return (
			<WorkWrapper>
				<div className="container py-4">
					<div>
						<h1 className="title text-center">Works and Demos</h1>
						<cite className="blockquote-footer text-center text-light ">Not Perfect But Least</cite>
					</div>
					<div className="listItem ">
						<Slide bottom duration={800}>
							<div className="company1 text-center">
								<a href="https://d40ns.codesandbox.io/">
									<img src={bgG} alt="company1" />
									<h5>Background Gradient Generator</h5>
								</a>
							</div>
							<div className="company1 text-center">
								<a href="https://kvdgr.codesandbox.io/">
									<img src={todoP} alt="company1" />
									<h5>Todo List ( Pure React )</h5>
								</a>
							</div>
							<div className="company1 text-center">
								<a href="https://jlmwg.codesandbox.io/">
									<img src={todoRR} alt="company1" />
									<h5>Todo List ( React + Redux )</h5>
								</a>
							</div>
							<div className="company1 text-center">
								<a href="https://tzmy1.codesandbox.io/">
									<img src={blogP} alt="company1" />
									<h5>
										Blog Page <br />( React + Redux + Pagination )
									</h5>
								</a>
							</div>
							<div className="company1 text-center">
								<a href="https://w654l.codesandbox.io/">
									<img src={product} alt="company1" />
									<h5>
										Product Store <br /> ( React + Redux + React Router)
									</h5>
								</a>
							</div>
							<div className="company1 text-center">
								<a href="http://ngochajaderiver.com/">
									<img src={jade} alt="company1" />
									<h5>Ngoc Ha Jade River</h5>
								</a>
							</div>
							<div className="company1 text-center">
								<a href="http://tuonglaifoods.vn/">
									<img src={food} alt="company1" />
									<h5>Tương Lai Food</h5>
								</a>
							</div>
						</Slide>
					</div>
				</div>
			</WorkWrapper>
		);
	}
}

const WorkWrapper = styled.section`
	background-color: #252827;
	color: ghostwhite;
	height: 100%;
	width: 100%;
	cite {
		font-size: 1.5rem;
	}
	.listItem {
		display: flex;
		flex-wrap: wrap;
	}
	.company1 {
		height: 50vh;
		margin: 1.5rem auto;

		img {
			height: 90%;
		}
		a {
			text-decoration: none;
			color: #e66156;
			text-align: center;
			word-wrap: break-word;
		}
	}
`;
export default Work;
