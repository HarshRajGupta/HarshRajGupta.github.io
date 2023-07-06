import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ProjectList } from '@assets/data';
import { Project, DragDownButton } from '@components';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Projects({ isdark }) {
	return (
		<Container
			id={'Projects'}
			isdark={isdark}
		>
			<Swiper
				slidesPerView={1}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: true,
				}}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				{ProjectList.map((project) => (
					<SwiperSlide key={project.id}>
						<Project
							data={project}
							isdark={isdark}
						/>
						{/* <div>{project.id}</div> */}
					</SwiperSlide>
				))}
			</Swiper>
			<DragDownButton
				link={'#Contact-me'}
				isdark={isdark}
			/>
		</Container>
	);
}

Projects.propTypes = {
	isdark: PropTypes.bool,
};

Projects.defaultProps = {
	isdark: true,
};

const Container = Styled.div`
	color: #15023a;
	display: grid;

    * {
        overflow: visible;
        max-width: 80vw;
        max-height: calc(100vh - 70px);
		@media (max-width: 540px) {
		}
    }
	z-index: 1;
	width: 100%;
	height: calc(100vh - 71px);
	background: url('https://user-images.githubusercontent.com/85221003/190643911-5296bdf7-b088-41f7-beff-c3f946a974d4.jpg');
	background-size: contain;
	@media (max-width: 540px) {
		height: calc(100vh - 56px);
		background-size: cover;
		background-repeat: no-repeat;
		* {
			max-width: 100vw;
			max-height: calc(100vh - 56px);
		}
    }
`;

export default Projects;
