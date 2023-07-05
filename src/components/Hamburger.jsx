import Styled from 'styled-components';
import { Theme } from '@components';
import PropTypes from 'prop-types';

function HamBurger({ show, isdark, setDark }) {
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
		<Container
			show={show}
			isdark={isdark}
		>
			<Menu isdark={isdark}>
				<Theme
					setDark={setDark}
					isdark={isdark}
				/>
				{menuList.map((item, index) => (
					<Item key={index}>
						<a
							className="link"
							href={`#${item.id}`}
						>
							{item.title}
						</a>
					</Item>
				))}
			</Menu>
		</Container>
	);
}

HamBurger.propTypes = {
    show: PropTypes.bool,
	isdark: PropTypes.bool,
	setDark: PropTypes.func,
};

HamBurger.defaultProps = {
    show: false,
    isdark: false,
}

const Container = Styled.div`
    display: grid;
    width: 204px;
    height: calc(100vh - 70px);
    top: 70px;
    position: fixed;
    transform: ${(props) =>
		props.show ? 'translateX(0%)' : 'translateX(100%)'};
    opacity: ${(props) => (props.show ? '1' : '0.5')};
    transition: all 1024ms ease;
    @media (max-width: 540px) {
		max-height: calc(100vh - 56px);
        height: max-content;
        top: 56px;
        width: 100%;
        transform: ${(props) =>
			props.show ? 'translateX(0%)' : 'translateY(-100vh)'};
    }
    background: url("https://user-images.githubusercontent.com/85221003/190644474-da925862-c4fe-4dc8-96dc-e2df2c7ced9a.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    right: 0;
    align-items: center;
    justify-content: space-around;
`;

const Menu = Styled.ul`
    display: grid;
    width: 100%;
    grid-gap: 4vh;
    margin-bottom: 2vh;
    padding: 1rem;
    grid-template-columns: auto;
    position: relative;
    color: ${({ isdark }) => (isdark ? '#15023a' : '#fff')};
`;

const Item = Styled.li`
    /* width: max-content; */
    display: grid;
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
        /* background: linear-gradient(#5cb6f9, #00c4cc, #5ae2e2); */
    }
    &:hover {
        /* color: #5ae2e2; */
        /* font-weight: 600; */
        opacity: 0.75;
        transition-delay: 0s !important;
        transition-duration: 0s !important;
    }
    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom  left;
    }
`;

export default HamBurger;
