import React, { Component } from 'react';
import styled from 'styled-components';

export class Blog extends Component {
	render() {
		return (
			<BlogWrapper>
				<h1>This is Blog</h1>
			</BlogWrapper>
		);
	}
}

const BlogWrapper = styled.section`
	background-color: #252827;
	margin: 0;
	padding: 0;
	height: 100vh;
	width: 100%;
`;
export default Blog;
