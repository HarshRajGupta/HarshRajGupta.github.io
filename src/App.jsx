import { Suspense, useState, useEffect } from 'react';
import styled from 'styled-components';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Spinner } from '@components';

// import {
// 	Home,
// 	About,
// 	Portfolio,
// 	Projects,
// 	Contact,
// 	TopBar,
// 	LightBackground,
// 	DarkBackground,
// } from '@container';

const {
	Home,
	About,
	Portfolio,
	Projects,
	Contact,
	TopBar,
	LightBackground,
	DarkBackground,
} = await import('@container');

function App() {
	const [isdark, setDark] = useState(true);
	useEffect(() => {
		if (localStorage.getItem('&7aQ@sb95ZF1cP#4&m3K') === 'false') {
			setDark(false);
		}
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}, []);
	useEffect(() => {
		console.log('reload');
		const aosRefresh = () =>
			setInterval(() => {
				AOS.refresh();
			}, 100);
		aosRefresh();
		return () => {
			clearInterval(aosRefresh);
		};
	}, []);
	useEffect(() => {
		if (isdark) {
			document.getElementsByTagName('html')[0].style.backgroundColor =
				'rgba(2, 12, 23, 1)';
			document.getElementById('root').style.backgroundColor =
				'rgba(2, 12, 23, 0.9)';
			document.getElementsByTagName('html')[0].style.color = '#5cb6f9';
			document.getElementsByClassName(
				'spinner-container',
			)[0].style.backgroundColor = 'rgba(2, 12, 23, 0.5)';
			document.getElementsByClassName('spinner')[0].style.animationName =
				'text-color';
		} else {
			document.getElementsByTagName('html')[0].style.backgroundColor =
				'rgba(255, 255, 255, 1)';
			document.getElementById('root').style.backgroundColor =
				'rgba(255, 255, 255, 0.7)';
			document.getElementsByTagName('html')[0].style.color = '#15023a';
			document.getElementsByClassName(
				'spinner-container',
			)[0].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
			document.getElementsByClassName('spinner')[0].style.animationName =
				'text-color2';
		}
		localStorage.setItem('&7aQ@sb95ZF1cP#4&m3K', isdark);
	}, [isdark]);
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<Suspense fallback={<Spinner test={'welcome'} />}>
			<div>
				<Container>
					<TopBar
						menuOpen={menuOpen}
						setMenuOpen={setMenuOpen}
						isdark={isdark}
						setDark={setDark}
					/>
					<Sections fullscreen={!menuOpen}>
						<Home isdark={isdark} />
						<About isdark={isdark} />
						<Portfolio isdark={isdark} />
						<Projects isdark={isdark} />
						<Contact isdark={isdark} />
						{/* <FalseComponent /> */}
					</Sections>
					{isdark ? <DarkBackground /> : <LightBackground />}
					{/* <ChatBot /> */}
				</Container>
			</div>
		</Suspense>
	);
}

const Container = styled.div`
	height: 100vh;
	width: 100vw;
`;

const Sections = styled.main`
	max-width: 100vw;
	overflow-x: hidden;
	width: ${(props) => (props.fullscreen ? '100vw' : 'calc(100vw - 204px)')};
	transition: width 0.5s ease-in-out;
	height: calc(100vh - 70px);
	position: relative;
	top: 70px;
	@media (min-width: 541px) {
		width: ${(props) =>
			props.fullscreen ? '100vw' : 'calc(100vw - 204px)'};
	}
	display: grid;
	/* grid-template-columns: repeat(1, 1fr); */
	overflow-y: scroll;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
	scroll-snap-type: y mandatory;
	@media (max-width: 540px) {
		height: calc(100vh - 56px);
		top: 56px;
	}
`;

export default App;
