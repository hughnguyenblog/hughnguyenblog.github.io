import React, { Component } from 'react';
import styled from 'styled-components';
import Jello from 'react-reveal/Jello';

import { FaHeart } from 'react-icons/fa';

export class Footer extends Component {
	state = {
		isOpenCV: false
	};
	openCV = () => {
		console.log(this.state.isOpenCV);
		this.setState({
			isOpenCV: !this.state.isOpenCV
		});
	};
	render() {
		return (
			<FooterWrapper>
				<div className="container my-4 ">
					<h5 className="text-center">You Can Get Me Via 👇</h5>
					<div className="text-center">
						<div className="social">
							Phone/Zalo/Skype :<a href="skype:live:b12061fb97add7ea?chat"> (+84) 947 20 66 88</a>{' '}
						</div>
						<div className="social">
							Email:{' '}
							<a href="mailto:hughnguyen1305@gmail.com?Subject=Hellooooooooo 💪!!">
								hughnguyen1305@gmail.com
							</a>
						</div>
						<div className="social">
							Messenger : <a href="https://m.me/ngoc.and.huy.2030">m.me/ngoc.and.huy.2030</a>
						</div>
						<div className="social">
							Github: <a href="https://github.com/hughnguyenblog/">github.com/hughnguyenblog</a>
						</div>
						<div className="social">
							My Blog: <a href="/">Hugh's Corner</a>
						</div>
					</div>

					<div className="text-center my-2">
						<a
							href="https://drive.google.com/file/d/16YjbAuz8VgluKn3Uq7MxmBm3Cpmko2Oa/view"
							target="_blank"
							className="btn btv btn-outline-danger "
							rel="noopener noreferrer"
						>
							About My CV
						</a>
					</div>
					<small className="blockquote-footer text-center text-light pt-2">
						From Hugh with
						<Jello forever>
							<FaHeart size={24} style={{ color: '#ed3833' }} />
						</Jello>
						@ HoChiMinh City, VietNam in {new Date().getFullYear()}
					</small>
				</div>
			</FooterWrapper>
		);
	}
}

const FooterWrapper = styled.section`
	background-color: #252827;
	color: ghostwhite;
	border-top: crimson solid;
	height: 100%;
	width: 100%;
	.social {
		a {
			color: #ed3833;
			text-decoration: none;
		}
		a:hover {
			color: crimson;
		}
	}
`;

export default Footer;
