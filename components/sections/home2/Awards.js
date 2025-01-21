'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.owl-prev',
        prevEl: '.owl-next',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}

export default function Awards() {
  return (
    <>
        <section className="awards-section sec-pad bg-color-4">
            <div className="auto-container">
                <div className="sec-title">
                    <h6>Achivements</h6>
                    <h2>We're proud of our awards</h2>
                </div>
                <div className="inner-container">
                    <Swiper {...swiperOptions} className="theme_carousel award-carousel">
                        <SwiperSlide className="slide-item">
                            <div className="awards-block-one">
                                <div className="inner-box">
                                    <div className="light-icon"><img src="assets/images/icons/icon-31.png" alt=""/></div>
                                    <div className="icon-box"><img src="assets/images/icons/icon-30.png" alt=""/></div>
                                    <h3>Global Forex <br />Firm of the Year</h3>
                                    <p>Global Forex Awards <br />Mar, 2023</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <div className="awards-block-one">
                                <div className="inner-box">
                                    <div className="light-icon"><img src="assets/images/icons/icon-31.png" alt=""/></div>
                                    <div className="icon-box"><img src="assets/images/icons/icon-30.png" alt=""/></div>
                                    <h3>Most Transparent <br />FX Firm</h3>
                                    <p>The Forex Expo USA <br />Dec, 2022</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <div className="awards-block-one">
                                <div className="inner-box">
                                    <div className="light-icon"><img src="assets/images/icons/icon-31.png" alt=""/></div>
                                    <div className="icon-box"><img src="assets/images/icons/icon-30.png" alt=""/></div>
                                    <h3>Best Forex Rewards <br />Program</h3>
                                    <p>Global Forex Awards <br />Jun, 2022</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <div className="awards-block-one">
                                <div className="inner-box">
                                    <div className="light-icon"><img src="assets/images/icons/icon-31.png" alt=""/></div>
                                    <div className="icon-box"><img src="assets/images/icons/icon-30.png" alt=""/></div>
                                    <h3>Global Forex <br />Firm of the Year</h3>
                                    <p>Global Forex Awards <br />Mar, 2023</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <div className="awards-block-one">
                                <div className="inner-box">
                                    <div className="light-icon"><img src="assets/images/icons/icon-31.png" alt=""/></div>
                                    <div className="icon-box"><img src="assets/images/icons/icon-30.png" alt=""/></div>
                                    <h3>Most Transparent <br />FX Firm</h3>
                                    <p>The Forex Expo USA <br />Dec, 2022</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <div className="awards-block-one">
                                <div className="inner-box">
                                    <div className="light-icon"><img src="assets/images/icons/icon-31.png" alt=""/></div>
                                    <div className="icon-box"><img src="assets/images/icons/icon-30.png" alt=""/></div>
                                    <h3>Best Forex Rewards <br />Program</h3>
                                    <p>Global Forex Awards <br />Jun, 2022</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <div className="dots-style-one">
                        <div className="swiper-pagination"></div>
                    </div>

                    <div className="nav-style-one">
                        <button type="button" className="owl-prev"><span className="flaticon-left"></span></button>
                        <button type="button" className="owl-next"><span className="flaticon-right-arrow-1"></span></button>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}
