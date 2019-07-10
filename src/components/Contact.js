import React, { Component } from 'react';
import styled from 'styled-components';

export class Contact extends Component {
	render() {
		return (
			<ContactWrapper>
				<h1>This is Contact</h1>
			</ContactWrapper>
		);
	}
}

const ContactWrapper = styled.section`
	background-color: ghostwhite;
	margin: 0;
	padding: 0;
	height: 100vh;
	width: 100%;
`;

export default Contact;
