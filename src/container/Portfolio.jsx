import Styled from 'styled-components';
import { Suspense, memo, lazy } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
// import ShowCase from '../components/ShowCase';
// import DragDownButton from '../components/DragDownButton';

const ShowCase = lazy(() => import('../components/ShowCase'));
const DragDownButton = lazy(() => import('../components/DragDownButton'));
const Spinner = lazy(() => import('../components/Spinner'));

const list = [
	{
		id: 'featured',
		title: 'Featured',
	},
	{
		id: 'achievements',
		title: 'Achievements',
	},
	{
		id: 'certifications',
		title: 'Certifications',
	},
	{
		id: 'skills',
		title: 'Skills',
	},
	{
		id: 'languages',
		title: 'Languages',
	},
	{
		id: 'project',
		title: 'Projects',
	},
];

function Portfolio({ isDark, all }) {
	return (
		<Suspense fallback={<Spinner text={`Loading`} />}>
			<Container id={'Portfolio'}>
				<PageHeading>Portfolio</PageHeading>
				<Tabs isDark={isDark}>
					{list.map((item) => (
						<NavLink
							to={`${item.id}`}
							exact
							activeClassName="active"
							key={item.id}
						>
							<Tab isDark={isDark}>{item.title}</Tab>
						</NavLink>
					))}
				</Tabs>
				<Routes>
					{list.map((item) => (
						<Route
							path={`/${item.id}`}
							key={item.id}
							exact
							element={
								<ShowCase
									selector={item.id}
									isDark={isDark}
								/>
							}
						/>
					))}
					<Route
						path="/*"
						element={
							<ShowCase
								selector={'featured'}
								isDark={isDark}
							/>
						}
					/>
				</Routes>
				{all && (
					<DragDownButton
						link="#Projects"
						isDark={isDark}
					/>
				)}
			</Container>
		</Suspense>
	);
}

const Container = Styled.main`
    width: 100%;
    height: calc(100vh - 70px);
    @media (max-width: 540px) {
		height: calc(100vh - 56px);
    }
    display: block;
    z-index: 1;
    * {
        overflow: hidden !important;
    }
`;
const PageHeading = Styled.div`
    font-size: 64px;
    font-family:  Poppins;
    margin: 0 auto;
    margin-bottom: 16px;
    font-weight: 500;
    display: block;
    /* color: crimson; */
    color: #00c4cc;
    &::before {
        content: "My ";
        font-family: 'Pacifico', cursive;
        /* color: #15023a; */
        color: #5cb6f9;
        font-weight: 400;
    }
    @media (max-width: 540px) {
        font-size: 32px;
    }
`;

const Tabs = Styled.ul`
    grid-template-columns: auto auto auto auto auto auto;
    margin: 0 auto;
    margin-bottom: 18px;
    width: 69vw;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 768px) {
        width: 85vw;
    }
    @media (max-width: 540px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    /* background: rgba(255, 255, 255, 0.2); */
    background: ${({ isDark }) =>
		isDark ? 'rgba(2, 12, 23,0.1)' : 'rgba(255, 255, 255, 0.1)'};
    .active li{
        color: #00c4cc !important;
		transform: scale(1) !important;
        background-color: ${({ isDark }) =>
			isDark
				? 'rgba(255, 255, 255, 0.9) !important'
				: 'rgba(2, 12, 23, 0.9) !important'};
        transition: all 250ms 250ms ease !important;
        /* transform: scale(1); */
    }
`;

const Tab = Styled.li`
    font-size: 16px;
    @media (max-width: 540px) {
        font-size: 14px;
    }
    @media (max-width: 300px) {
        font-size: 12px;
    }
    padding: 7px;
    border-radius: 12px;
    text-transform: capitalize;
    font-weight: 600;
    cursor: pointer;
    height: max-content;
    transform: scale(0.9);
    margin: 0 auto;
`;

export default memo(Portfolio);
