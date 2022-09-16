import { memo } from 'react';
import Styled from 'styled-components';
import {
	FeaturedPosts,
	AchievementPosts,
	CertificatePosts,
	SkillsPosts,
	LanguagesPosts,
} from '../data';
import { Fade } from 'react-reveal';
// import { Routes, Route, Link } from 'react-router-dom';

function ShowCase({ selector, setSelector, isDark }) {
	var Data = [];
	switch (selector) {
		case 'featured':
			Data = FeaturedPosts;
			break;
		case 'achievements':
			Data = AchievementPosts;
			break;
		case 'certifications':
			Data = CertificatePosts;
			break;
		case 'skills':
			Data = SkillsPosts;
			break;
		case 'languages':
			Data = LanguagesPosts;
			break;
		default:
			Data = FeaturedPosts;
			setSelector('featured');
			break;
	}
	return (
		<ItemContainer isDark={isDark}>
			{Data.map((item) => (
				<Fade>
					<Item
						key={item.id}
						bgColor={
							'#' +
							Math.floor(Math.random() * 16777215).toString(16)
						}
					>
						<Image
							src={item.image}
							alt={item.title}
						></Image>
						<h1>{item.title}</h1>
					</Item>
				</Fade>
			))}
		</ItemContainer>
	);
}

const ItemContainer = Styled.div`
    height: inherit;
    align-items: center;
    margin: 0 auto;
    grid-template-columns: auto auto auto;
    grid-gap: 16px 128px;
    height: max-content;
    justify-content: center;
    width: 100%;
    @media (max-width: 1280px) {
        grid-gap: 8px 32px;
        grid-template-columns: auto auto;
    }
    /* background: rgba(255, 255, 255, 0.1); */
    background: ${({ isDark }) =>
		isDark ? 'rgba(2, 12, 23,0.1)' : 'rgba(255, 255, 255, 0.1)'};
    /* background: rgba(2, 12, 23,0.1); */
    overflow: visible;
    * {
        overflow: visible;
    }
`;

const Item = Styled.div`
    width: 200px;
    height: 120px;
    margin: 0.5rem auto;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background: ${(props) => props.bgColor};
    h1 {
        width: 100%;
        font-size: 18px;
        text-align: center;
        font-family:  cursive;
        font-weight: 500;
        position: absolute;
        opacity: 0;
        height: 100%;
        align-items: center;
        background-color: rgba(21, 2, 58, 0.69);
        color: #fff;
        cursor: pointer;
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
`;

export default memo(ShowCase);
