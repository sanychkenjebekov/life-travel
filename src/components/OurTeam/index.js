import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import komanda from '../../img/life-komanda.jpg'
import komanda1 from '../../img/komandaOne.jpg'
import komanda2 from '../../img/komandaTwo.jpg'




const OurTeam = () => {

    return (
        <div id='ourTeam'>
            {/*<div className="container">*/}
                <div className="ourTeam">
                    <h1>Наша команда</h1>
                    <center><div className="ourTeam--swip">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={komanda} alt=""/></SwiperSlide>
                        <SwiperSlide><img src={komanda1} alt=""/></SwiperSlide>
                        <SwiperSlide><img src={komanda2} alt=""/></SwiperSlide>

                    </Swiper>
                    </div></center>
                </div>
            {/*</div>*/}
        </div>
    );
};

export default OurTeam;