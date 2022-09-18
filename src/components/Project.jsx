import { memo } from 'react';
import styled from 'styled-components';

function Project({ data }) {
	return (
		<Container>
			<Item>
				<Left>
					<LeftContainer>
						<IconContainer>
							<Icon
								src={data.icon}
								alt={data.title}
							/>
						</IconContainer>
						<h2>{data.title}</h2>
						<p className="desc">{data.desc}</p>
						<a
							target="_blank"
							href={data.url}
							rel="noreferrer"
						>
							Link
						</a>
					</LeftContainer>
				</Left>
				<Right>
					<Image
						src={data.image}
						alt={data.title}
					/>
				</Right>
			</Item>
		</Container>
	);
}

const Container = styled.div`
	width: 80vw;
	/* height: calc(100vh - 70px); */
	display: flex;
	align-items: center;
	margin: 0 auto;
	justify-content: center;
	* {
		overflow: hidden !important;
	}
`;

const Item = styled.div`
	width: 764px;
	height: 360px;
	background-color: white;
	border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 75vw;
	max-height: 75vh;
`;

const Left = styled.div`
	flex: 4;
	height: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const LeftContainer = styled.div`
	width: 90%;
	height: max-content;
	max-height: 90%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	h2 {
		font-size: 23px;
		font-weight: 700;
	}
	p {
		margin: 8px 0;
		max-width: 100%;
		max-height: 144px;
		font-style: italic;
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
		font-size: 10px;
    line-height: 16px;
    letter-spacing: 0.6px;
	}
	a {
		font-size: 16px;
		font-weight: 600;
		text-decoration: underline;
		cursor: pointer;
		color: rgb(0, 196, 204);
	}
`;

const IconContainer = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: rgb(0, 196, 204);
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 8px;
`;

const Icon = styled.img`
	width: 25px;
`;

const Right = styled.div`
	flex: 8;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;

const Image = styled.img`
	width: 400px;
	transform: rotate(-10deg);
`;

export default memo(Project);
