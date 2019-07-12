import React, { Component } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

export class Contact extends Component {
	state = {
		name: '',
		yourEmail: '',
		yourFeedback: ''
	};
	handleChange = (e) => {
		this.setState({
			name: e.target.value
		});
	};
	render() {
		return (
			<ContactWrapper>
				<div className="container py-4">
					<Fade right>
						<h1 className="title text-center">Tell Me Something</h1>
						<cite className="blockquote-footer text-center ">
							May I do something for U, Your Feedbacks, Job Offering or Anything/Everything <br />I'm a
							good listener !! PEACEEEE !!! 🤝🤝
						</cite>
					</Fade>
					<div className="container">
						<Fade right>
							<div className="text-muted mt-5 font-italic">
								* You Can Directly Send An Email To Me Through This Form Below 👇
							</div>
							<div className="form-group mb-3">
								<label>Your Name:</label>
								<input
									onChange={(e) => this.handleChange(e)}
									type="text"
									placeholder="How Can I Call You 🤗"
									className="form-control"
									value={this.state.name}
									style={{ textTransform: 'capitalize' }}
								/>
								{this.state.name === '' ? (
									<div />
								) : (
									<p style={{ textAlign: 'center', textTransform: 'capitalize', fontSize: '1rem' }}>
										Nice to meet you, {this.state.name}
										<span role="img" aria-label="Hooray!">
											{' '}
											!! 🥳
										</span>
									</p>
								)}
							</div>
							<div className="form-group my-3">
								<label>Your Email:</label>

								<input type="email" placeholder="So I Can Reply You Back 😁" className="form-control" />
							</div>
							<div className="form-group my-3">
								<label>Your Whisper Here:</label>
								<textarea
									placeholder="It's Your Timeeee !!! 👉"
									className="form-control"
									rows="7"
									id="comment"
								/>
							</div>
							<br />
							<button className="btn btn-danger">
								Let's go
								<span role="img" aria-label="Hooray!">
									!!! 🚀
								</span>
							</button>
						</Fade>
					</div>
				</div>
			</ContactWrapper>
		);
	}
}

const ContactWrapper = styled.section`
	background-color: ghostwhite;
	height: 100%;
	width: 100%;
	.contactForm {
	}
	.form-group {
		font-size: 1.2rem;
		label {
			font-family: var(--fontText);
		}
	}
	.form-control {
		width: 100%;
	}
	.form-control:focus {
		box-shadow: 0 0 0 2px crimson;
	}
`;

export default Contact;
