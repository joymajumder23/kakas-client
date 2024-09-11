import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import Swiper from "swiper";
const Slider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://i.ibb.co.com/qW7CxhV/sl-062322-51120-15-Converted.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className="w-full h-[500px]" src="https://i.ibb.co.com/bPgnWZ0/93873972-2870942996525108-5533775016811823104-n.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;