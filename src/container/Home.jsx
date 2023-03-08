import { memo } from 'react';
import Styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { DragDownButton } from '../components';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function Intro({ isDark, all }) {
	return (
		<Container id="Home">
			<Left>
				<ImageContainer>
					<Zoom ssrFadeout>
						<Image src="https://user-images.githubusercontent.com/85221003/156927272-0c54db85-436c-4e95-b0b9-9959978a1f5d.gif" />
					</Zoom>
				</ImageContainer>
			</Left>
			<Right>
				<Fade
					right
					big
				>
					<Wrap isDark={isDark}>
						<LineOne isDark={isDark}>Hi There, I'm</LineOne>
						<LineTwo isDark={isDark}>Harsh Raj Gupta</LineTwo>
						<LineThree isDark={isDark}>
							<span>
								<Typewriter
									options={{
										strings: [
											'Competitive Programmer',
											'MERN Stack Developer',
											'SIH 2022 Finalist',
											'ICPC 21-22 Regionalist',
											'Speacialist @CF',
											'Codechef 4*',
										],
										autoStart: true,
										loop: true,
										pauseFor: 2000,
										cursorClassName: 'blinkingCursor',
									}}
								/>
							</span>
						</LineThree>
					</Wrap>
				</Fade>
			</Right>
			{all && (
				<DragDownButton
					link="#About-me"
					isDark={isDark}
				/>
			)}
		</Container>
	);
}
const Container = Styled.main`
    width: 100%;
    height: calc(100vh - 70px);
    @media (max-width: 540px) {
		height: calc(100vh - 56px);
    }
    grid-template-columns: auto auto;
    position: relative;
    justify-content: center;
    @media (max-width: 984px) {
        grid-template-columns: auto
    }
    overflow: hidden;
    /* background: rgba(255, 255, 255, 0.1); */
    z-index: 1;
    padding: 0 12px;
`;

const Left = Styled.div`
    display: flex;
    overflow: hidden;
    width: 100%;
    @media (max-width: 1280px) and (min-width: 984px) {
        align-items: center;
    }
`;

const ImageContainer = Styled.div`
    height: 120vh;
    background-color: #82c5f8;
    background-size: contain;
    border-radius: 50%;
    align-items: center;
    @media (max-width: 1720px) {
        height: 110vh;
    }
    @media (max-width: 1396px) {
        height: 100%;
    }
    @media (max-width: 1280px) {
        height: 96%;
    }
    position: relative;
    align-items: center;
    overflow: hidden;
`;

const Image = Styled.img`
    /* height: calc(100vh - 70px); */
    height: auto;
    width: 100%;
    object-fit: cover;
    @media (max-width: 1280px) {
        width: 100vw;
    }
    transform: scaleX(-1);
    @media (max-width: 1640px) {
        margin-left: -2%;
    }
    @media (max-width: 1600px) {
        margin-left: -5%;
    }
    @media (max-width: 1560px) {
        margin-left: -10%;
    }
    @media (max-width: 984px) {
        margin-left: 0;
    }
`;

const Right = Styled.div`
    padding: 50px;
    * {
        max-width: 100%;
    }
    justify-content: space-around;
    @media (min-width: 1280px) {
        align-items: center;
    }
    @media (max-width: 1280px) {
        width: 100%;
    }
    align-items: center;
    overflow: visible;
`;

const Wrap = Styled.ul`
    height: max-content;
    /* color: ${({ isDark }) =>
		isDark ? '#00c4cc' : 'rgba(2, 12, 23,0.9)'}; */
    color: ${({ isDark }) => (isDark ? '#d1f4f5' : '#15023a')};
    user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    @media (max-width: 1280px) {
        padding: 0rem;
        text-align: center;
    }
    cursor: none;
    * {
        /* text-shadow: 3px 4px 7px ${({ isDark }) =>
			isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(81,67,21,0.8)'}; */
        /* font-weight: bold; */
        overflow: visible;
    }
`;

const LineOne = Styled.h1`
    font-family: Montserrat;
    font-weight: 600;
    font-size: 24px;
    @media (max-width: 1280px) {
        margin: 0 auto;
    }
    @media (max-width: 414px) {
        font-size: 20px
    }
    @media (max-width: 300px) {
        font-size: 16px
    }
`;

const LineTwo = Styled.h3`
    font-weight: bold;
    font-family:  'sign';
    /* font-family: Poppins; */
    font-size: 64px;
    margin: 10px 0;
    cursor: none;
    background: -webkit-linear-gradient(#5cb6f9, #00c4cc, #185a9d);
    text-shadow: 3px 4px 7px ${({ isDark }) =>
		isDark ? 'rgba(255, 255, 255, 0.2)' : 'none'};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
    width: 100%;
    @media (max-width: 541px) {
        font-size: 56px;
    }
    @media (max-width: 415px) {
        font-size: 42px;
    }
    @media (max-width: 300px) {
        font-size: 32px
    }
`;

const LineThree = Styled.h2`
    width: 360px;
    font-size: 32px;
    font-family: "Zen Kaku Gothic Antique";
    font-weight: bold;
    @media (max-width: 1280px) {
        margin: 0 auto;
    }
    @media (max-width: 414px) {
        font-size: 24px;
        width: 269px;
    }
    @media (max-width: 300px) {
        font-size: 18px;
        width: 201px;
    }
    * {
        display: inline;
    }
    span {
        /* color: ${({ isDark }) => (isDark ? 'inherit' : 'crimson')}; */
        &.blinkingCursor {
            @keyframes typingCursor {
                0% { opacity: 1 }
                50% { opacity: 0 }
                100% { opacity: 1 }
            }
            font-family: "Zen Kaku Gothic Antique";
            font-size: 36px;
            animation: typingCursor 1s 0ms infinite step-end;
            color: orange;
            font-weight: 400;
        }
    }
`;

export default memo(Intro);