import styled from 'styled-components';
import PropTypes from 'prop-types';

function Project({ data, isdark }) {
	return (
		<Container>
			<div data-aos={`zoom-in`}>
				{data.type === 'project' ? (
					<Item isdark={isdark}>
						<Left>
							<LeftContainer>
								<IconContainer>
									<Icon
										src={data.icon}
										alt={data.title}
									/>
								</IconContainer>
								<h1>{data.title}</h1>
								<p className="desc">{data.desc}</p>
								<a
									target="_blank"
									href={data.link}
									rel="noreferrer"
								>
									Link
								</a>
							</LeftContainer>
						</Left>
						<Right>
							<Image
								src={data.image}
								loading="lazy"
								alt={data.title}
							/>
						</Right>
					</Item>
				) : (
					<Photo
						src={data.image}
						alt={data.title}
						onClick={() => {
							window.open(data.link, '_blank');
						}}
						loading="lazy"
					/>
				)}
			</div>
		</Container>
	);
}

Project.propTypes = {
	data: PropTypes.object.isRequired,
	isdark: PropTypes.bool,
};

Project.defaultProps = {
	isdark: false,
};

const Photo = styled.img`
	width: 764px;
	height: auto;
	max-width: 50vw;
	max-height: 75vh;
	object-fit: contain;
	cursor: pointer;
	overflow: hidden;
`;

const Container = styled.div`
	width: max-content;
	max-width: 75vw !important;
	height: 100%;
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
	height: 400px;
	background-color: ${({ isdark }) =>
		isdark ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)'};
	color: ${({ isdark }) => (!isdark ? '#fff' : '#000')};
	border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 75vw;
	max-height: 50vh;
	@media (max-width: 540px) {
		max-height: 40vh;
	}
	@media (max-width: 380px) {
		max-height: 33vh;
	}
`;

const Left = styled.div`
	flex: 4;
	height: 90%;
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
	h1 {
		font-size: 23px;
		font-weight: 600;
		@media (max-width: 540px) {
			font-size: 16px;
		}
		@media (max-width: 380px) {
			font-size: 12px;
		}
	}
	p {
		margin: 8px 0;
		max-width: 100%;
		max-height: 144px;
		/* font-style: italic; */
		font-family: 'Comic Sans MS', cursive, monospace;
		font-weight: 300;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: 0.6px;
		@media (max-width: 540px) {
			font-size: 11px;
			line-height: 16px;
		}
		@media (max-width: 380px) {
			font-size: 8px;
			line-height: 14px;
		}
	}
	a {
		font-size: 16px;
		@media (max-width: 540px) {
			font-size: 12px;
		}
		@media (max-width: 380px) {
			font-size: 10px;
		}
		font-weight: 600;
		text-decoration: underline;
		cursor: pointer;
		color: rgb(0, 196, 204);
	}
`;

const IconContainer = styled.div`
	width: 40px;
	height: 40px;
	@media (max-width: 540px) {
		width: 30px;
		height: 30px;
	}
	@media (max-width: 380px) {
		width: 20px;
		height: 20px;
	}
	border-radius: 50%;
	background-color: rgb(0, 196, 204);
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 8px;
`;

const Icon = styled.img`
	width: 25px;
	@media (max-width: 540px) {
		width: 20px;
	}
	@media (max-width: 380px) {
		width: 15px;
	}
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
	width: 480px;
	max-width: 30vw;
	transform: rotate(-10deg);
`;

export default Project;
