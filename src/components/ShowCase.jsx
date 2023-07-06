import { Suspense, useState, useEffect } from 'react';
import Styled from 'styled-components';
import AOS from 'aos';
import {
	FeaturedPosts,
	AchievementPosts,
	CertificatePosts,
	SkillsPosts,
	LanguagesPosts,
	ProjectPosts,
} from '@assets/data';
import { Spinner, ShortSpinner } from '@components';
import PropTypes from 'prop-types';

function ShowCase({ selector, isdark }) {
	const [Data, setData] = useState(FeaturedPosts);
	useEffect(() => {
		switch (selector) {
			case 'achievements':
				setData(AchievementPosts);
				break;
			case 'certifications':
				setData(CertificatePosts);
				break;
			case 'skills':
				setData(SkillsPosts);
				break;
			case 'languages':
				setData(LanguagesPosts);
				break;
			case 'project':
				setData(ProjectPosts);
				break;
			default:
				setData(FeaturedPosts);
		}
		AOS.init({
			duration: 750,
		});
		return () => {
			AOS.refresh();
		};
	}, [selector]);
	return (
		<Suspense fallback={<Spinner text={`Loading`} />}>
			<ItemContainer isdark={isdark}>
				{Data.map((item, index) => (
					<Suspense
						key={index}
						fallback={<Spinner />}
					>
						<a
							data-aos={
								index % 3 === 2
									? 'zoom-in-left'
									: index % 3
									? 'zoom-in-up'
									: 'zoom-in-right'
							}
							target="_blank"
							href={item.link}
							rel="noreferrer"
						>
							<Item
								bgcolor={
									'#' +
									Math.floor(
										Math.random() * 16777215,
									).toString(16)
								}
							>
								{selector !== 'languages' &&
									selector !== 'skills' && (
										<Loading>
											<ShortSpinner />
										</Loading>
									)}
								<Image
									src={item.image}
									alt={item.title}
									isdark={isdark}
									loading="lazy"
								/>
								<h1>{item.title}</h1>
							</Item>
						</a>
					</Suspense>
				))}
			</ItemContainer>
		</Suspense>
	);
}

ShowCase.propTypes = {
	selector: PropTypes.string,
	isdark: PropTypes.bool,
};

const ItemContainer = Styled.div`
    display: grid;
    height: inherit;
    align-items: center;
    margin: 0 auto;
    grid-template-columns: auto auto auto;
    grid-gap: 16px 128px;
    height: fit-content;
    justify-content: center;
    width: 100%;
    @media (max-width: 1280px) {
        grid-gap: 8px 32px;
        grid-template-columns: auto auto;
    }
    /* background: rgba(255, 255, 255, 0.1); */
    background: ${({ isdark }) =>
		isdark ? 'rgba(2, 12, 23,0.1)' : 'rgba(255, 255, 255, 0.1)'};
    overflow: scroll;
`;

const Item = Styled.div`
    display: grid;
    width: 200px;
    height: 120px;
    margin: auto;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    position: relative;
    background: ${(props) => props.bgcolor};
	border: 10px solid;
	border-image-slice: 1;
	border-width: 2px;
	border-image-source: ${(props) =>
		`linear-gradient(to right, ${props.bgcolor})`};
    h1 {
		display: grid;
        width: 100%;
        font-size: 13px;
        text-align: center;
        font-family: 'Pacifico', cursive;
        font-weight: 400;
        position: absolute;
        opacity: 0;
        height: 100%;
        align-items: center;
		justify-content: center;
        background-color: rgba(21, 2, 58, 0.69);
        color: #fff;
        cursor: pointer;
		z-index:2;
        /* transition: hover 0.1s 0.4s ease-in-out; */
    }
    border-radius: 16px;
    &:hover {
        h1 {
            opacity: 1;
            transition: all 0.4s 0.1s ease-in-out;
            transform: scale(1.5);
        }
    }
    @media (max-width: 1280px) {
        width: 35vw;
        height: 18vw;
    }
    overflow: hidden;
    &:hover {
        transition: all 0.4s 0.1s ease-in-out;
        scale: 1.1;
        img {
            transition: all 0.4s 0.1s ease-in-out;
            scale: 1.2;
        }
    }
`;
const Image = Styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 1;
    background: ${({ isdark }) =>
		isdark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'};
`;

const Loading = Styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    z-index: 0;
`;

export default ShowCase;
