import React, { Component } from 'react';
import styled from 'styled-components';

export class Footer extends Component {
	render() {
		return (
			<FooterWrapper>
				<h1>this is Footer</h1>
			</FooterWrapper>
		);
	}
}

const FooterWrapper = styled.section`
	background-color: #e66156;
	height: 100%;
	width: 100%;
`;

export default Footer;
