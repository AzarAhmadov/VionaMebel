import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
export default function Slider() {
    return (
        <section id='slider'>
            <Swiper
                pagination={true}
                modules={[Pagination]}
                breakpoints={{
                    340: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                slidesPerView={5}
                className="mySwiper3">

                <SwiperSlide>
                    <div className="swiper-item">
                        <img src="../images/b1.png" alt="" />
                        <a className='blue' href="#"> YUMŞAQ MEBEL </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-item">
                        <img src="../images/b2.png" alt="" />
                        <a className='green' href="#"> STOL-STUL </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-item">
                        <img src="../images/b3.png" alt="" />
                        <a className='blue' href="#"> QONAQ OTAĞI </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-item">
                        <img src="../images/b4.png" alt="" />
                        <a className='green' href="#"> YATAQ OTAĞI </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-item">
                        <img src="../images/b5.png" alt="" />
                        <a className='blue' href="#"> MƏTBƏX </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-item">
                        <img src="../images/b4.png" alt="" />
                        <a className='green' href="#"> YATAQ OTAĞI </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-item">
                        <img src="../images/b5.png" alt="" />
                        <a className='blue' href="#"> MƏTBƏX </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
