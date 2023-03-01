import Styled from 'styled-components';
import { memo } from 'react';
import { Link } from 'react-router-dom';

function HamBurger({ showMenu, setMenu, isDark, setDark }) {
	const menuList = [
		{
			id: 'home',
			title: 'home',
		},
		{
			id: 'about',
			title: 'about me',
		},
		{
			id: 'portfolio',
			title: 'portfolio',
		},
		{
			id: 'projects',
			title: 'projects',
		},
		{
			id: 'contact',
			title: 'contact',
		},
	];
	return (
		<Container show={showMenu}>
			<Menu>
				<Theme
					onClick={() => setDark(!isDark)}
					isDark={isDark}
				>
					{isDark ? (
						<svg
							width="32"
							height="32"
							fill="currentColor"
							viewBox="0 0 16 16"
							className="bi bi-brightness-high-fill active"
						>
							<path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
						</svg>
					) : (
						<svg
							width="32"
							height="32"
							fill="currentColor"
							viewBox="0 0 16 16"
							className="bi bi-moon-fill active"
						>
							<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
						</svg>
					)}
				</Theme>
				{showMenu &&
					menuList.map((item) => (
						<Item>
							<Link className="link" to={item.id}>{item.title}</Link>
						</Item>
					))}
			</Menu>
		</Container>
	);
}

const Container = Styled.div`
    width: 204px;
    height: calc(100vh - 70px);
    top: 70px;
    position: fixed;
    /* opacity: ${({ show }) => (show ? '1' : '0.69')}; */
    transform: ${(props) =>
		props.show ? 'translateX(0%)' : 'translateX(100%)'};
    transition: all 1024ms ease;
    @media (max-width: 540px) {
		max-height: calc(100vh - 56px);
        height: max-content;
        top: 56px;
        width: 100vw;
        transform: ${(props) =>
			props.show ? 'translateX(0%)' : 'translateY(-100vh)'};
    }
    background: url("https://user-images.githubusercontent.com/85221003/190644474-da925862-c4fe-4dc8-96dc-e2df2c7ced9a.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    right: 0;
    color: #fff;
    align-items: center;
    justify-content: space-around;
`;

const Menu = Styled.ul`
    width: 100%;
    grid-gap: 4vh;
    margin-bottom: 2vh;
    padding: 1rem;
    grid-template-columns: auto;
    position: relative;
`;

const Theme = Styled.div`
    margin: 0 auto;
    color: ${({ isDark }) => (isDark ? '#15023a' : '#fff')};
    transition: all 125ms ease-in-out;
    overflow: visible;
    cursor: pointer;
    svg {
        transform: scale(0.75);
        &:hover {
            filter: drop-shadow(3px 4px 7px #00c4cc);
            transform: scale(1);
        }
    }
`;

const Item = Styled.li`
    width: max-content;
    margin: 0 auto;
    .link {
        margin: 0 auto;
    width: max-content;
    text-decoration: none;
    font-family: "Zen Kaku Gothic Antique";
    font-size: 30px;
    text-align: center;
    font-weight: 400;
    display: inline-block;
    position: relative;
    transition-delay: 250ms;
    text-transform: capitalize;
    }
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 4px;
        bottom: 0px;
        left: 0;
        /* background-color: transparent; */
        transform-origin: bottom right;
        transition: transform 512ms ease-out;
        border-radius: 32px;
        background: linear-gradient(#5cb6f9, #00c4cc, #5ae2e2);
    }
    &:hover {
        color: #5ae2e2;
        font-weight: Black;
        opacity: 0.75;
        transition-delay: 0s !important;
        transition-duration: 0s !important;
    }
    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom  left;
    }
`;

export default memo(HamBurger);
