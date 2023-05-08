import React from 'react';
import {BsInstagram} from "react-icons/bs";
import {Link} from "react-router-dom";



import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFlip, Pagination, Navigation } from "swiper";

const Galereya = () => {
    return (
        <div id='galereya'>
            <div className="container">
                <div className="galereya">
                    <h1>Галерея<span>.</span></h1>
                    <div className="galereya--about">
                        <div className="galereya--about__title">
                            <p>В каждом путешествии с вами будет фотограф, который поможет всё запечатлить.</p>
                        </div>
                        <div className="galereya--about__title">
                            <Link to={'https://www.instagram.com/life_travelkg/?igshid=YmMyMTA2M2Y%3D'}><BsInstagram className='inst'/></Link>
                            <p>Больше фотографий смотрите в нашем <span>Instagram</span></p>
                        </div>
                    </div>
                    <center><div className="galereya--img">
                        <Swiper
                            effect={"flip"}
                            grabCursor={true}
                            pagination={true}
                            navigation={true}
                            modules={[EffectFlip, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="https://www2.inteletravel.com/hubfs/layout/InteleTravel_Homepage_StressLessTravelMore.jpeg" alt=''/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://dsgrcdnblobprod5u3.azureedge.net/uploadedfiles/uploads%5Ca40b0e5c-1d4e-4b8e-883b-4d676fb63636-01.26.22_FBAd_JB_1_xlarge.webp" alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://thetravelclub.ph/upload/stowlcarousel/ttc-fb-community-onlinemobile-1.png" alt=''/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?cs=srgb&dl=pexels-oleksandr-pidvalnyi-3278215.jpg&fm=jpg" alt=''/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt=''/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://www.cibeg.com/-/media/project/cib/product-cards/personal/loans/product-card---loans---travel---en.jpg?h=338&w=600&hash=93D2F44EBC1B0C40B688241B4C960437" alt=''/>
                            </SwiperSlide>
                        </Swiper>
                    </div></center>
            </div>
            </div>
        </div>
    );
};

export default Galereya;