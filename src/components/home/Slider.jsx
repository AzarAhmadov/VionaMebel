import React from 'react'
import { allProduct } from '../data/data';
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
                        spaceBetween: 0,
                    },
                }}
                slidesPerView={5}
                className="mySwiper3">

                {
                    allProduct.map((el, idx) => {
                        return (
                            el.category === 'slider' ?
                                <SwiperSlide key={idx} >
                                    <div className="swiper-item">
                                        <img src={el.images} alt="" />
                                        <a className={el.color} href="#"> {el.txt} </a>
                                    </div>
                                </SwiperSlide> : null
                        )
                    })
                }
            </Swiper>
        </section>
    )
}
