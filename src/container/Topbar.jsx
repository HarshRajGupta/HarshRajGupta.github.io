import Styled from 'styled-components';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import Theme from '@components/ThemeSwitch';
import HamBurger from '@components/HamBurger';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const Data = {
	email: 'HarshR4jGupta@gmail.com',
	number: '+917607642202',
	resume: 'https://drive.google.com/file/d/1Ajxq0J7MF7ySTEbG03mCYT41fG3_4xap/view?usp=drive_link',
};

function TopBar({ menuOpen, setMenuOpen, isdark, setDark }) {
	return (
		<Container
			className={!menuOpen && 'active'}
			isdark={isdark}
		>
			<HamBurger
				show={menuOpen}
				isdark={isdark}
				setDark={setDark}
			/>
			<Wrap>
				<LeftBar>
					<MyName
						onClick={() => {
							window.location.href = '#Home';
						}}
						isdark={isdark}
					>
						harsh.
					</MyName>
					<Theme
						setDark={setDark}
						isdark={isdark}
					/>
					<Item>
						<CallIcon
							className="icon"
							onClick={() => {
								navigator.clipboard.writeText(Data.number);
								toast.success(
									`Mobile Number has been copied✨`,
								);
							}}
						/>
						<ItemText
							onClick={() => {
								navigator.clipboard.writeText(Data.number);
								toast.success(
									`Mobile Number has been copied✨`,
								);
							}}
						>
							{Data.number}
						</ItemText>
					</Item>
					<Item>
						<EmailIcon
							className="icon"
							onClick={() => {
								navigator.clipboard.writeText(Data.email);
								toast.success(`Email id has been copied✨`);
							}}
						/>
						<ItemText
							onClick={() => {
								navigator.clipboard.writeText(Data.email);
								toast.success(`Email id has been copied✨`);
							}}
						>
							{Data.email}
						</ItemText>
					</Item>
					<Item>
						<DownloadIcon
							className="icon"
							onClick={() => window.open(Data.resume)}
						/>
						<ItemText onClick={() => window.open(Data.resume)}>
							Resume
						</ItemText>
					</Item>
				</LeftBar>
				<RightBar>
					<Hamburger
						onClick={() => setMenuOpen(!menuOpen)}
						className={menuOpen && 'active'}
						isdark={isdark}
					>
						<span></span>
						<span></span>
						<span></span>
					</Hamburger>
				</RightBar>
			</Wrap>
		</Container>
	);
}

TopBar.propTypes = {
	menuOpen: PropTypes.bool,
	setMenuOpen: PropTypes.func,
	isdark: PropTypes.bool,
	setDark: PropTypes.func,
};

TopBar.defaultProps = {
	menuOpen: false,
	setMenuOpen: () => {},
	isdark: false,
	setDark: () => {},
};

const Wrap = Styled.div`
	display: grid;
    width: 100%;
    padding: 10px 30px;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: auto auto;
`;

const LeftBar = Styled.div`
	display: grid;
    grid-template-columns: auto auto auto auto auto;
    align-items: center;
    grid-gap: 70px;
    @media (max-width: 1280px) {
        grid-gap: 16px;
    }
	width: max-content;
`;

const MyName = Styled.h1`
    font-size: 42px;
    font-weight: 600;
    text-decoration: none;
	margin: 0 auto;
    font-family: Poppins;
    @media (max-width: 540px) {
        font-size: 24px;
    }
	@media (max-width: 414px) {
        font-size: 21px;
    }
    @media (max-width: 300px) {
        font-size: 18px;
    }
	cursor: pointer;
	/* color: ${({ isdark }) => (isdark ? '#00c4cc' : 'rgba(2, 12, 23, 0.9)')}; */
`;

const Item = Styled.div`
	display: grid;
    grid-template-columns: auto auto;
    grid-gap: 4px;
    align-items: center;
    cursor: default;
	@media (max-width: 1280px) {
        display: none;
    }
	.icon {
		width: 24px;
		@media (max-width: 414px) {
			width: 20px;
		}
		@media (max-width: 300px) {
			width: 16px;
		}
	}
	/* transition: all 250ms ease-in-out !important; */
	&:hover {
		color: #00c4cc;
	}
`;
const ItemText = Styled.div`
    font-family: Poppins;
    font-size: 14px;
	@media (max-width: 414px) {
        font-size: 12px;
    }
    @media (max-width: 300px) {
        font-size: 10px;
    }
    font-weight: 500;
	cursor: pointer;
	@media (max-width: 1280px) {
        display: none;
    }
`;
const RightBar = Styled.div``;

const Hamburger = Styled.div`
	display: grid;
    width: 24px;
	@media (max-width: 414px) {
		width: 20px;
	}
    grid-gap: 1.4px;
    height: 18px;
	@media (max-width: 414px) {
		height: 16px;
	}
    cursor: pointer;
    overflow: hidden;
    align-items: center;
    span {
        width: 100%;
        height: 2.5px;
		@media (max-width: 414px) {
			height: 2px;
		}
        background-color: ${({ isdark }) => (isdark ? '#fff' : '#15023a')};
		/* background-color: #00c4cc; */
        transform-origin: right;
        transition: transform 1s ease;
        border-radius: 256px;
    }
    &.active {
        height: 32px; 
        grid-gap: 1px; 
        span { 
            &:first-child { 
                /* background-color: #fff;  */
                transform: rotate(-45deg);
            } 
            &:nth-child(2) {
                display: none;
            } 
            &:last-child {
                /* background-color: #fff;  */
                transform: rotate(45deg);
            }
        }
    }
`;

const Container = Styled.div`
    width: 100vw;
    height: 70px;
    position: fixed; 
    top: 0;
    z-index: 2;
    transform: width 0s, height 0s;
	background: ${({ isdark }) =>
		isdark ? 'rgba(2, 12, 23,0.5)' : 'rgba(255, 255, 255, 0.1)'};
	/* color: ${({ isdark }) => (isdark ? '#5cb6f9' : '#15023a')}; */
	color: ${({ isdark }) => (isdark ? '#fff' : '#15023a')};
    @media (max-width: 540px) {
        height: 56px;
    }
`;

export default TopBar;
