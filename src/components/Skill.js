import React, { Component } from 'react';
import styled from 'styled-components';

export class Skill extends Component {
	render() {
		return (
			<SkillWrapper>
				<h1>This is Skill</h1>
			</SkillWrapper>
		);
	}
}
const SkillWrapper = styled.section`
	background-color: ghostwhite;
	margin: 0;
	padding: 0;
	height: 100vh;
	width: 100%;
`;

export default Skill;
