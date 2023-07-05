import Styled from 'styled-components';
import { DragDownButton } from '@components';
import PropTypes from 'prop-types';

const Data = [
	'"Amenable Software Engineer gifted at translating client requirements into technical development plans.',
	'Communicates productively with both technical and non-technical personnel and clients.',
	'A proactive learner dedicated to improving skills through hands-on learning and development work.',
	'Friendly provider of deep programming knowledge and invaluable final products.',
	'Well-organized and collaborative team player with strong communication and analytical abilities.',
	'Proficient in mobile and desktop development environments.',
	'Adept at using ReactJS/Redux, ExpressJs/NodeJs and other programming languages to produce clean code.',
	'Detail-oriented, organized and meticulous leader.',
	'Enthusiastic team player ready to contribute to company success.',
	'Works at fast pace to meet tight deadlines."',
];

function About({ isdark }) {
	return (
		<Container id={'About-me'}>
			<Wrap isdark={isdark}>
				<PageHeading
					isdark={isdark}
					data-aos={'fade-right'}
				>
					&nbsp;Me
				</PageHeading>
				<AboutMe isdark={isdark}>
					<p>
						{Data.map((item, index) => {
							return (
								<span
									key={index}
									data-aos={
										index & 1
											? 'zoom-in-left'
											: 'zoom-in-right'
									}
								>
									{item}
									<br />
								</span>
							);
						})}
					</p>
				</AboutMe>
				<Sign
					isdark={isdark}
					href="#Home"
					data-aos={'fade-left'}
				>
					Harsh Raj Gupta
				</Sign>
			</Wrap>
			<DragDownButton
				link="#Portfolio"
				isdark={isdark}
			/>
		</Container>
	);
}

About.defaultProps = {
	isdark: true,
};

About.propTypes = {
	isdark: PropTypes.bool,
};

const Container = Styled.div`
    width: 100%;
    height: calc(100vh - 70px);
	@media (max-width: 540px) {
		height: calc(100vh - 56px);
    }
	justify-content: center;
	display: flex;
	z-index: 1;
	position: relative;
`;

const PageHeading = Styled.h1`
	/* color: #00c4cc; */
	color: ${({ isdark }) => (isdark ? '#fff' : '#15023a')};
    font-size: 64px;
    font-family:  Poppins;
    margin: 0 auto;
    margin-bottom: 16px;
    font-weight: 500;
    display: block;
	width: fit-content;
    font-family: 'Pacifico', cursive;
    &::before {
		font-family: Poppins;
        content: "About";
        font-weight: 600;
    }
    @media (max-width: 540px) {
        font-size: 32px;
    }
`;
const Wrap = Styled.div`
	display: grid;
	min-height: calc(100vh - 70px);
	max-height: calc(100vh - 70px);
	@media (max-width: 540px) {
		min-height: calc(100vh - 56px);
		max-height: calc(100vh - 56px);
    }
	width: 100%;
	/* background: rgba(255, 255, 255, 0.69); */
	/* background: ${({ isdark }) =>
		isdark ? 'rgba(2, 12, 23,0.5)' : 'rgba(255, 255, 255, 0.5)'}; */
	align-items: top;
	margin: 0 auto;
	padding-bottom: 5rem;
	overflow: hidden;
	justify-content: center;
	position: relative;
`;

const AboutMe = Styled.div`
	overflow-y: auto;
	grid-template-columns: 1fr;
	background: ${({ isdark }) =>
		!isdark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.92)'};
	border-radius: 2rem;
	padding: 1rem;
	p {
		display: grid;
		margin: 0 auto;
		max-width: 76vw;
		@media (max-width: 540px) {
			width: 80vw;
		}
		user-select: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		/* height: 60vh; */
		/* &::before, &::after {
			content: '\"';
			font-style: none;
		} */
		/* background: -webkit-linear-gradient(#15023a, #185a9d); */
		/* background: -webkit-linear-gradient(#4bc0c8, #185a9d); */
		/* background: -webkit-linear-gradient(#5cb6f9, #00c4cc, #185a9d);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent; */
		color: ${({ isdark }) => (!isdark ? '#fff' : '#15023a')};
		text-shadow: 1px 1px 3.5px ${({ isdark }) => (!isdark ? '#00c4cc' : '#000')};
		font-family: 'Ubuntu Mono', monospace;
		font-size: 17px;
		line-height: 32px;
		@media (max-width: 414px) {
			font-size: 15px;
			line-height: 32px;
		}
		@media (max-width: 300px) {
			font-size: 12px;
			line-height: 28px;
		}
		font-weight: 400;
		text-align: center;
		font-style: italic;
		overflow-y: visible;
		/* padding: 32px; */
		span {
			margin: 0 auto;
			text-align: center;
		}
	}
`;

const Sign = Styled.a`
	display: inline-block;
	text-align: end;
	margin-top: 1.5rem;
	width: 100%;
	font-family: 'Sign';
	font-size: 48px;
	@media (max-width: 540px) {
		font-size: 24px;
    }
	/* color: ${({ isdark }) => (isdark ? '#d1f4f5' : '#15023a')}; */
	cursor: pointer;
	font-weight: bold;
	/* background: -webkit-linear-gradient(#185a9d, #15023a);
	background: ${({ isdark }) =>
		isdark
			? '-webkit-linear-gradient(#fff, #d1f4f5)'
			: ' -webkit-linear-gradient(#185a9d, #15023a)'};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent; */
	background: -webkit-linear-gradient(#5cb6f9, #00c4cc, #185a9d);
    text-shadow: 3px 4px 7px ${({ isdark }) =>
		isdark ? 'rgba(255, 255, 255, 0.2)' : 'none'};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	&::before {
		content: '-'
	}
	text-shadow: 3px 4px 7px ${({ isdark }) =>
		isdark ? 'rgba(255, 255, 255, 0)' : 'rgba(81,67,21,0)'};
	/* overflow: visible; */
`;

export default About;
