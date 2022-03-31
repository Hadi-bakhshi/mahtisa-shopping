import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./photoslider.css";
import sneaker1 from "../../assets/sneaker11.webp";
import sneaker2 from "../../assets/sneaker2.webp";
import sneaker4 from "../../assets/sneaker3.webp";
import sneaker3 from "../../assets/sneaker4.webp";
import sneaker5 from "../../assets/sneaker5.webp";
import sneaker6 from "../../assets/sneaker6.webp";

const PhotoSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={sneaker1} alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sneaker2} alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sneaker3} alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sneaker4} alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sneaker5} alt="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sneaker6} alt="slider-img" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default PhotoSlider;
