import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Container from './home/Container';
import Modal from './Modal';
export default function SimilarProduct() {
    return (
        <section className='swiperSLideGlobal'>
            <Container>
                <div className="top-title">
                    <h4>
                        MƏHSULLAR
                        <span>
                            Məhsullar
                        </span>
                    </h4>
                </div>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    slidesPerView={4}
                    spaceBetween={0}
                    modules={[Pagination, Navigation, Mousewheel, Keyboard]}
                    className="mySwiper2"
                    breakpoints={{
                        340: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        725: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 0,
                        },
                    }}
                >
                    <SwiperSlide className='swiper-slider'>
                        <div className="slide-item">
                            <img src="../images/pop4.png" alt="" />
                            <div className="slide-content">
                                <h5 className='title'>Divan</h5>
                                <span className="code">v2ghjkl345</span>
                                <div className="price">
                                    <span className='old-price'> 3.700₼ </span>
                                    <span className='current-price'>2.990₼</span>
                                </div>
                            </div>
                            <button> <i className="fa-solid fa-cart-shopping"></i> Səbətə at</button>
                            <div className="like">
                                <i className="fa-regular fa-heart"></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slider'>
                        <div className="slide-item">
                            <img src="../images/dd2.png" alt="" />
                            <div className="slide-content">
                                <h5 className='title'>Divan</h5>
                                <span className="code">v2ghjkl345</span>
                                <div className="price">
                                    <span className='old-price'> 3.700₼ </span>
                                    <span className='current-price'>2.990₼</span>
                                </div>
                            </div>
                            <button> <i className="fa-solid fa-cart-shopping"></i> Səbətə at</button>
                            <div className="like">
                                <i className="fa-regular fa-heart"></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slider'>
                        <div className="slide-item">
                            <img src="../images/pop1.png" alt="" />
                            <div className="slide-content">
                                <h5 className='title'>Kreslo</h5>
                                <span className="code">v2ghjkl345</span>
                                <div className="price">
                                    <span className='old-price'> 3.700₼ </span>
                                    <span className='current-price'>2.990₼</span>
                                </div>
                            </div>
                            <button> <i className="fa-solid fa-cart-shopping"></i> Səbətə at</button>
                            <div className="like">
                                <i className="fa-regular fa-heart"></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slider'>
                        <div className="slide-item">
                            <img src="../images/dd3.png" alt="" />
                            <div className="slide-content">
                                <h5 className='title'>Divan</h5>
                                <span className="code">v2ghjkl345</span>
                                <div className="price">
                                    <span className='old-price'> 3.700₼ </span>
                                    <span className='current-price'>2.990₼</span>
                                </div>
                            </div>
                            <button> <i className="fa-solid fa-cart-shopping"></i> Səbətə at</button>
                            <div className="like">
                                <i className="fa-regular fa-heart"></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slider'>
                        <div className="slide-item">
                            <img src="../images/pop4.png" alt="" />
                            <div className="slide-content">
                                <h5 className='title'>Divan</h5>
                                <span className="code">v2ghjkl345</span>
                                <div className="price">
                                    <span className='old-price'> 3.700₼ </span>
                                    <span className='current-price'>2.990₼</span>
                                </div>
                            </div>
                            <button> <i className="fa-solid fa-cart-shopping"></i> Səbətə at</button>
                            <div className="like">
                                <i className="fa-regular fa-heart"></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slider'>
                        <div className="slide-item">
                            <img src="../images/pop6.png" alt="" />
                            <div className="slide-content">
                                <h5 className='title'>Divan</h5>
                                <span className="code">v2ghjkl345</span>
                                <div className="price">
                                    <span className='old-price'> 3.700₼ </span>
                                    <span className='current-price'>2.990₼</span>
                                </div>
                            </div>
                            <button> <i className="fa-solid fa-cart-shopping"></i> Səbətə at</button>
                            <div className="like">
                                <i className="fa-regular fa-heart"></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slider'>
                        <div className="slide-item">
                            <img src="../images/pop1.png" alt="" />
                            <div className="slide-content">
                                <h5 className='title'>Divan</h5>
                                <span className="code">v2ghjkl345</span>
                                <div className="price">
                                    <span className='old-price'> 3.700₼ </span>
                                    <span className='current-price'>2.990₼</span>
                                </div>
                            </div>
                            <button> <i className="fa-solid fa-cart-shopping"></i> Səbətə at</button>
                            <div className="like">
                                <i className="fa-regular fa-heart"></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slider'>
                        <div className="slide-item">
                            <img src="../images/pop3.png" alt="" />
                            <div className="slide-content">
                                <h5 className='title'>Divan</h5>
                                <span className="code">v2ghjkl345</span>
                                <div className="price">
                                    <span className='old-price'> 3.700₼ </span>
                                    <span className='current-price'>2.990₼</span>
                                </div>
                            </div>
                            <button> <i className="fa-solid fa-cart-shopping"></i> Səbətə at</button>
                            <div className="like">
                                <i className="fa-regular fa-heart"></i>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <Modal/>
            </Container>
        </section>
    )
}
