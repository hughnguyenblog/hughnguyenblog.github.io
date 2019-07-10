import React, { Component } from 'react';
import styled from 'styled-components';

export class WorkExperience extends Component {
	render() {
		return (
			<WEWrapper>
				<h1>This is work section</h1>
			</WEWrapper>
		);
	}
}

const WEWrapper = styled.section`
	background-color: #252827;
	margin: 0;
	padding: 0;
	height: 100vh;
	width: 100%;
`;

export default WorkExperience;
