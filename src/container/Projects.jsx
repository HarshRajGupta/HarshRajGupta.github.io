import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Keyboard, Pagination, Navigation } from "swiper";
import { ProjectPosts } from "../data";
import Project from "../components/Project";
import Styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style.css";
function Projects({ isDark }) {
  SwiperCore.use([Autoplay, Keyboard]);
  return (
    <Container id={"Projects"}>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {ProjectPosts.map((project) => (
          <SwiperSlide key={project.id}>
            <Project data={project} isDark={isDark} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

const Container = Styled.div`
	color: #15023a;
    * {
        overflow: visible;
        max-width: 80vw;
        max-height: calc(100vh - 70px);
		@media (max-width: 540px) {
			max-width: 100vw;
			max-height: calc(100vh - 56px);
    	}
    }
	z-index: 1;
    width:100%;
    height: calc(100vh - 71px);
	background: url('/images/tk.jpg');
	background-size: contain;
	@media (max-width: 540px) {
		height: calc(100vh - 56px);
		background-size: cover;
		background-repeat: no-repeat;
		* {
			max-width: 100vw;
		}
    }
    position: relative;
    overflow: hidden;
	.swiper-button-next:after, .swiper-button-prev:after {
		opacity: 0.9;
		color : rgb(0, 196, 204);
	}
	.swiper-pagination-progressbar-fill {
		width: 100vw;
		margin: 0;
		background: rgb(0, 196, 204);
	}
`;

export default memo(Projects);
