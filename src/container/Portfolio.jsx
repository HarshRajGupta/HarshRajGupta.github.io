import Styled from 'styled-components';
import { Suspense, useState, lazy } from 'react';
import { DragDownButton, Spinner } from '@components';
import PropTypes from 'prop-types';

const ShowCase = lazy(() => import('@components/ShowCase'));

const list = [
	{
		id: '',
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

function Portfolio({ isdark }) {
	const [active, setActive] = useState(0);
	return (
		<Suspense fallback={<Spinner text={`Loading`} />}>
			<Container id={'Portfolio'}>
				<PageHeading
					isdark={isdark}
					data-aos={'fade-left'}
				>
					Portfolio
				</PageHeading>
				<Tabs
					isdark={isdark}
					data-aos={'fade-right'}
				>
					{list.map((item, index) => (
						<div
							key={item.id}
							className={active === index ? 'active' : ''}
							onClick={() => {
								setActive(index);
							}}
						>
							<Tab isdark={isdark}>{item.title}</Tab>
						</div>
					))}
				</Tabs>
				<ShowCase
					selector={list[active].id}
					isdark={isdark}
				/>
				<DragDownButton
					link="#Projects"
					isdark={isdark}
				/>
			</Container>
		</Suspense>
	);
}

Portfolio.propTypes = {
	isdark: PropTypes.bool,
};

Portfolio.defaultProps = {
	isdark: true,
};

const Container = Styled.main`
    display: grid;
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
const PageHeading = Styled.h1`
    font-size: 64px;
    font-family:  Poppins;
    margin: 0 auto;
    margin-bottom: 16px;
    font-weight: 500;
    display: block;
    width: fit-content;
    /* color: crimson; */
    color: ${({ isdark }) => (isdark ? '#fff' : '#15023a')};
    &::before {
        content: "My ";
        font-family: 'Pacifico', cursive;
        /* color: #15023a; */
        font-weight: 400;
    }
    @media (max-width: 540px) {
        font-size: 32px;
    }
`;

const Tabs = Styled.ul`
    display: grid;
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
    background: ${({ isdark }) =>
		isdark ? 'rgba(2, 12, 23,0.1)' : 'rgba(255, 255, 255, 0.1)'};
	color: ${({ isdark }) => (isdark ? '#fff' : '#15023a')};
    .active li{
        color: #00c4cc !important;
		transform: scale(1) !important;
        background-color: ${({ isdark }) =>
			isdark
				? 'rgba(255, 255, 255, 0.9) !important'
				: 'rgba(2, 12, 23, 0.9) !important'};
        /* transition: all 250ms 250ms ease !important; */
        /* transform: scale(1); */
    }
`;

const Tab = Styled.li`
    font-family: Poppins;
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
    font-weight: 400;
    cursor: pointer;
    height: max-content;
    transform: scale(0.9);
    margin: 0 auto;
`;

export default Portfolio;
