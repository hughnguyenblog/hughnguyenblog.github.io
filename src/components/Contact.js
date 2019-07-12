import React, { Component } from 'react';
import styled from 'styled-components';

import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

import { GiMuscleUp } from 'react-icons/gi';

export class Contact extends Component {
	state = {
		name: '',
		yourEmail: '',
		yourFeedback: '',
		formEmailSent: false,
		emailValid: false
	};
	handleChangeName = (e) => {
		this.setState({
			name: e.target.value
		});
	};
	handleEmail = (e) => {
		this.setState({
			yourEmail: e.target.value
		});
		this.validEmail(e.target.value);
	};
	validEmail(e) {
		const re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
		const emailValidArray = e.match(re);

		if (emailValidArray === null) {
			return this.setState({ emailValid: false });
		} else {
			return this.setState({ emailValid: true });
		}
	}

	handleText = (e) => {
		this.setState({
			yourFeedback: e.target.value
		});
	};
	submitForm = (e) => {
		e.preventDefault();
		const receiverEmail = process.env.REACT_APP_EMAILJS_RECEIVER;
		const template = process.env.REACT_APP_EMAILJS_TEMPLATEID;
		const serviceID = process.env.REACT_APP_EMAILJS_SERVICEID;
		const params = {
			from_name: this.state.name,
			from_email: this.state.yourEmail,
			reply_to: receiverEmail,
			message_html: this.state.yourFeedback
		};
		this.setState({
			isSubmit: true
		});
		this.sendEmail(serviceID, template, params);
	};
	sendEmail(serviceID, template, params) {
		window.emailjs
			.send(serviceID, template, params)
			.then((res) => {
				console.log(res);
				this.setState({
					formEmailSent: true,
					name: '',
					yourEmail: '',
					yourFeedback: '',
					isSubmit: false,
					emailValid: false
				});
			})
			.then(() => this.clear())
			.catch((err) => console.error('Failed to send feedback. Error: ', err));
	}
	clear = () => {
		setTimeout(() => {
			this.setState({ formEmailSent: false });
		}, 3000);
	};
	render() {
		return (
			<ContactWrapper>
				<Fade className="container py-4">
					<Fade right>
						<h1 className="title text-center">Tell Me Something</h1>
						<cite className="blockquote-footer text-center ">
							May I do something for U, Your Feedbacks, Job Offering or Anything/Everything <br />I'm a
							good listener !! PEACEEEE !!! 🤝🤝
						</cite>
					</Fade>
					<div className="container">
						<Fade right>
							<div className="text-muted mt-5 mb-2 font-italic">
								* You Can Directly Send An Email To Me Through This Form Below 👇
							</div>

							<div className="form-group mb-3">
								<label>Name:</label>
								<input
									onChange={(e) => this.handleChangeName(e)}
									type="text"
									placeholder="How Can I Call You 🤗"
									className="form-control"
									value={this.state.name}
									style={{ textTransform: 'capitalize' }}
								/>
								{this.state.name === '' ? (
									<div />
								) : (
									<p
										style={{
											textAlign: 'center',
											textTransform: 'capitalize',
											fontSize: '1rem'
										}}
									>
										Nice to meet you, {this.state.name}
										<span role="img" aria-label="Hooray!">
											{' '}
											!! 🥳
										</span>
									</p>
								)}
							</div>
							<div className="form-group my-3">
								<label>Email:</label>
								<input
									type="email"
									placeholder="To I Can Reply You Back 😁"
									className="form-control"
									onChange={(e) => this.handleEmail(e)}
									value={this.state.yourEmail}
									required
								/>
								<small className="text-danger font-italic font-weight-light">
									* You need to fill your Email to Submit 👆
								</small>
							</div>
							<div className="form-group my-3">
								<label>Your Whisper Here:</label>
								<textarea
									placeholder="It's Your Timeeee !!! 👉"
									className="form-control"
									rows="7"
									id="comment"
									onChange={(e) => this.handleText(e)}
									value={this.state.yourFeedback}
								/>
							</div>

							<div className="d-flex align-items-center my-3">
								<button
									type="submit"
									className="btn btn-danger"
									onClick={(e) => this.submitForm(e)}
									style={
										this.state.emailValid ? null : (
											{
												backgroundColor: 'grey'
											}
										)
									}
									disabled={!this.state.emailValid}
								>
									Let's go
									<span role="img" aria-label="Hooray!">
										!!! 🚀
									</span>
								</button>
								<div className="text-success font-weight-bold ml-3">
									{this.state.isSubmit === true ? (
										<Backdrop>
											<div>Sending 💌...</div>
										</Backdrop>
									) : null}
									{this.state.formEmailSent === true ? (
										<Bounce bottom style={{ color: 'green' }}>
											DONE <GiMuscleUp size={47} />
										</Bounce>
									) : null}
								</div>
							</div>
						</Fade>
					</div>
				</Fade>
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

const Backdrop = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 990;
	div {
		font-size: 3rem;
		text-align: center;
		padding-top: 40vh;
		color: ghostwhite;
	}
`;

export default Contact;
