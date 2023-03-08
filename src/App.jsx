import { Suspense, memo, useState, useEffect } from 'react';
import styled from 'styled-components';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { Routes, Route } from 'react-router-dom';
import Spinner from './components/Spinner';

// const TopBar = lazy(() => import('./container/Topbar'));
// const Intro = lazy(() => import('./container/Intro'));
// const Portfolio = lazy(() => import('./container/Portfolio'));
// const Projects = lazy(() => import('./container/Projects'));
// const About = lazy(() => import('./container/About'));
// const Contact = lazy(() => import('./container/Contact'));
// const Background = lazy(() => import('./container/BG'));
// const Background = lazy(() => import('./components/Background'));
// const LightBackground = lazy(() => import('./container/LightBackground'));
// const DarkBackground = lazy(() => import('./container/DarkBackground'));

import {
	Home,
	About,
	Portfolio,
	Projects,
	Contact,
	TopBar,
	LightBackground,
	DarkBackground,
	ChatBot,
} from './container';

function App() {
	// const alert = useAlert().show;
	let theme = true;
	if (localStorage.getItem('&7aQ@sb95ZF1cP#4&m3K') === 'false') {
		theme = false;
	}
	// alert(`Welcome to my portfolio website. This website is still under development.`);
	const [isDark, setDark] = useState(theme);
	useEffect(() => {
		if (isDark) {
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
		localStorage.setItem('&7aQ@sb95ZF1cP#4&m3K', isDark);
	}, [isDark]);
	const options = {
		position: positions.TOP_CENTER,
		timeout: 2000,
		offset: '16px',
		type: 'success',
		transition: transitions.SCALE,
	};
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<Suspense fallback={<Spinner text={`Loading`} />}>
			<AlertProvider
				template={AlertTemplate}
				{...options}
			>
				<Container>
					<TopBar
						menuOpen={menuOpen}
						setMenuOpen={setMenuOpen}
						isDark={isDark}
						setDark={setDark}
					/>
					<Suspense fallback={<Spinner text={`Loading`} />}>
						{
							<Sections fullScreen={!menuOpen}>
								<Routes>
									<Route
										exact
										path="/home"
										element={<Home isDark={isDark} />}
									/>
									<Route
										exact
										path="/about"
										element={<About isDark={isDark} />}
									/>
									<Route
										exact
										path="/portfolio/*"
										element={<Portfolio isDark={isDark} />}
									/>
									<Route
										exact
										path="/projects"
										element={<Projects isDark={isDark} />}
									/>
									<Route
										exact
										path="/contact"
										element={<Contact isDark={isDark} />}
									/>
									<Route
										path="/*"
										element={
											<>
												<Home
													all
													isDark={isDark}
												/>
												<About
													all
													isDark={isDark}
												/>
												<Suspense
													fallback={
														<Spinner
															text={`Loading`}
														/>
													}
												>
													<Portfolio
														all
														isDark={isDark}
													/>
												</Suspense>
												<Projects
													all
													isDark={isDark}
												/>
												<Contact isDark={isDark} />
											</>
										}
									/>
								</Routes>
							</Sections>
						}
					</Suspense>
					{isDark ? <DarkBackground /> : <LightBackground />}
					<ChatBot />
				</Container>
			</AlertProvider>
		</Suspense>
	);
}

const Container = styled.div`
	height: 100vh;
	width: 100vw;
`;

const Sections = styled.main`
	/* width: ${(props) =>
		props.fullScreen ? '100vw' : 'calc(100vw - 204px)'}; */
	width: 100vw;
	transition: all 750ms ease;
	height: calc(100vh - 70px);
	position: relative;
	top: 70px;
	@media (min-width: 541px) {
		width: ${(props) =>
			props.fullScreen ? '100vw' : 'calc(100vw - 204px)'};
	}
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

export default memo(App);
