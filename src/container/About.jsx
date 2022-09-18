import Styled from 'styled-components';
import DragDownButton from '../components/DragDownButton';
import { memo } from 'react';

function About({ isDark, all }) {
	return (
		<Container id={'About-me'}>
			<Wrap isDark={isDark}>
				<div>
					<PageHeading> Me</PageHeading>
					<AboutMe>
						<p>
							{
								'Amenable Software Engineer gifted at translating client requirements into technical development plans.'
							}
							<br />
							{
								'Communicates productively with both technical and non-technical personnel and clients.'
							}
							<br />
							{
								'A proactive learner dedicated to improving skills through hands-on learning and development work.'
							}
							<br />
							{
								'Friendly provider of deep programming knowledge and invaluable final products.'
							}
							<br />
							{
								'Well-organized and collaborative team player with strong communication and analytical abilities.'
							}
							<br />
							{
								'Proficient in mobile and desktop development environments.'
							}
							<br />
							{
								'Adept at using ReactJS/Redux, ExpressJs/NodeJs and other programming languages to produce clean code.'
							}
							<br />
							{
								'Detail-oriented, organized and meticulous leader.'
							}
							<br />
							{
								'Enthusiastic team player ready to contribute to company success.'
							}
							<br />
							{'Works at fast pace to meet tight deadlines.'}
						</p>
					</AboutMe>
				</div>
				<Sign
					isDark={isDark}
					href="#Home"
				>
					Harsh Raj Gupta
				</Sign>
			</Wrap>
			{all && (
				<DragDownButton
					link="#Portfolio"
					isDark={isDark}
				/>
			)}
		</Container>
	);
}

const Container = Styled.div`
    width: 100%;
    height: calc(100vh - 70px);
	@media (max-width: 540px) {
		height: calc(100vh - 56px);
    }
	justify-content: center;
	z-index: 1;
	grid-template-columns: 1fr;
	position: relative;
`;

const PageHeading = Styled.div`
	color: #00c4cc;
    font-size: 64px;
    font-family:  Poppins;
    margin: 0 auto;
    margin-bottom: 16px;
    font-weight: 500;
    display: block;
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
	min-height: calc(100vh - 70px);
	@media (max-width: 540px) {
		min-height: calc(100vh - 56px);
    }
	width: max-content;
	/* background: rgba(255, 255, 255, 0.69); */
	background: ${({ isDark }) =>
		isDark ? 'rgba(2, 12, 23,0.5)' : 'rgba(255, 255, 255, 0.5)'};
	align-items: top;
	display: block;
	margin: 0 auto;
	padding-bottom: 5rem;
	overflow-y: scroll;
	/* justify-content: center; */
	position: relative;
`;

const AboutMe = Styled.div`
	p {
		display: block;
		width: 76vw;
		@media (max-width: 540px) {
			width: 80vw;
    	}
		user-select: none;
    	-webkit-user-select: none;
    	-khtml-user-select: none;
    	-moz-user-select: none;
    	-ms-user-select: none;
		/* height: 60vh; */
		&::before, &::after {
			content: '\"';
			font-style: none;
		}
		/* background: -webkit-linear-gradient(#15023a, #185a9d); */
		/* background: -webkit-linear-gradient(#4bc0c8, #185a9d); */
		background: -webkit-linear-gradient(#5cb6f9, #00c4cc, #185a9d);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-family: 'Ubuntu Mono', monospace;
		font-size: 20px;
		line-height: 36px;
		@media (max-width: 414px) {
        	font-size: 17px;
			line-height: 32px;
    	}
   		@media (max-width: 300px) {
        	font-size: 14px;
			line-height: 28px;
    	}
		font-weight: 600;
		text-align: center;
		font-style: italic;
		overflow-y: visible;
		/* padding: 32px; */
	}
`;

const Sign = Styled.a`
	display: flex;
	justify-content: end;
	margin-top: 1.5rem;
	width: 100%;
	font-family: 'Sign';
	font-size: 48px;
	@media (max-width: 540px) {
		font-size: 24px;
    }
	cursor: pointer;
	font-weight: bold;
	background: -webkit-linear-gradient(#185a9d, #15023a);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	&::before {
		content: '-'
	}
	text-shadow: 3px 4px 7px ${({ isDark }) =>
		isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(81,67,21,0.8)'};
	overflow: visible;
`;

export default memo(About);
