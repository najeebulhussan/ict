'use client'
import Link from "next/link"
import React from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import CircleText from "../../../components/elements/CircleText"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

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
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}

export default function Footer5() {
  return (
    <>
      <div className="footer-testimonial-area bg-color-9">
            <section className="testimonial-style-three">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/faq-2.png" alt=""/></figure>
                                <div className="text"><h6>Rated 4.9/5</h6></div>
                                <div className="icon-box"><img src="assets/images/icons/icon-66.png" alt=""/></div>
                                <div className="curve-text">
                                    <div className="link"><Link href="/index-5"><i className="flaticon-right-arrow-1"></i></Link></div>
                                    <div className="curved-circle-2"><CircleText text="Exploremoretraderreviews&nbsp;.&nbsp;" radius={67} /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="sec-title light">
                                    <h6>Testimonials</h6>
                                    <h2>Hear what traders think</h2>
                                </div>
                                <Swiper {...swiperOptions} className="theme_carousel">
                                    <SwiperSlide>
                                        <div className="testimonial-block-one">
                                            <div className="inner-box">
                                                <div className="author-box">
                                                    <div className="icon-box"><i className="flaticon-quotation"></i></div>
                                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                                    <h3>Nathan Felix</h3>
                                                    <span className="designation">Director @ Naxly Info Tech</span>
                                                </div>
                                                <div className="text-box">
                                                    <h5>Experience like never before<img src="assets/images/icons/icon-16.png" alt=""/></h5>
                                                    <p>Indignation dislike men who are beguiled & demoralized by  the charms pleasure of the moment obligations business it will frequently occur that pleasures.</p>
                                                    <div className="rating">
                                                        <h6><i className="flaticon-rate-star-button"></i>4.9</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-block-one">
                                            <div className="inner-box">
                                                <div className="author-box">
                                                    <div className="icon-box"><i className="flaticon-quotation"></i></div>
                                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.png" alt=""/></figure>
                                                    <h3>Eloise Juniper</h3>
                                                    <span className="designation">Founder, Thinkquest Technologies</span>
                                                </div>
                                                <div className="text-box">
                                                    <h5>made simple and efficient!<img src="assets/images/icons/icon-16.png" alt=""/></h5>
                                                    <p>Indignation dislike men who are beguiled & demoralized by  the charms pleasure of the moment obligations business it will frequently occur that pleasures.</p>
                                                    <div className="rating">
                                                        <h6><i className="flaticon-rate-star-button"></i>5.0</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-block-one">
                                            <div className="inner-box">
                                                <div className="author-box">
                                                    <div className="icon-box"><i className="flaticon-quotation"></i></div>
                                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                                    <h3>Nathan Felix</h3>
                                                    <span className="designation">Director @ Naxly Info Tech</span>
                                                </div>
                                                <div className="text-box">
                                                    <h5>Experience like never before<img src="assets/images/icons/icon-16.png" alt=""/></h5>
                                                    <p>Indignation dislike men who are beguiled & demoralized by  the charms pleasure of the moment obligations business it will frequently occur that pleasures.</p>
                                                    <div className="rating">
                                                        <h6><i className="flaticon-rate-star-button"></i>4.9</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-block-one">
                                            <div className="inner-box">
                                                <div className="author-box">
                                                    <div className="icon-box"><i className="flaticon-quotation"></i></div>
                                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.png" alt=""/></figure>
                                                    <h3>Eloise Juniper</h3>
                                                    <span className="designation">Founder, Thinkquest Technologies</span>
                                                </div>
                                                <div className="text-box">
                                                    <h5>made simple and efficient!<img src="assets/images/icons/icon-16.png" alt=""/></h5>
                                                    <p>Indignation dislike men who are beguiled & demoralized by  the charms pleasure of the moment obligations business it will frequently occur that pleasures.</p>
                                                    <div className="rating">
                                                        <h6><i className="flaticon-rate-star-button"></i>5.0</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <footer className="footer-style-five">
                <div className="inner-container">
                    <div className="pattern-layer">
                        <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-33.png)" }}></div>
                        <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-34.png)" }}></div>
                    </div>
                    <a className="scroll-to-target" href="#top"><i className="flaticon-up-arrow"></i></a>
                    <div className="upper-box centred">
                        <figure className="footer-logo"><Link href="/index-5"><img src="assets/images/logo-9.png" alt=""/></Link></figure>
                        <h2>Talk to us</h2>
                        <h3>We're here to listen</h3>
                        <ul className="info-list">
                            <li>
                                <p>Mail us!</p>
                                <h5><Link href="mailto:sendmail@example.com">sendmail@example.com</Link></h5>
                            </li>
                            <li>
                                <p>Call us!</p>
                                <h5><Link href="tel:1800766123456">+1 800 766-1234 & 56</Link></h5>
                            </li>
                            <li>
                                <p>Business Hrs</p>
                                <h5>8am-5pm, Mon-Friday</h5>
                            </li>
                        </ul>
                        <ul className="social-links">
                            <li><Link href="/index-5"><i className="flaticon-facebook"></i></Link></li>
                            <li><Link href="/index-5"><i className="flaticon-video-camera"></i></Link></li>
                            <li><Link href="/index-5"><i className="flaticon-instagram-logo"></i></Link></li>
                            <li><Link href="/index-5"><i className="flaticon-youtube"></i></Link></li>
                        </ul>
                    </div>
                    <div className="lower-box">
                        <div className="left-column">
                            <div className="language-box">
                                <div className="icon-box"><i className="flaticon-earth"></i></div>
                                <div className="select-box">
                                    <select className="wide">
                                       <option data-display="En">En</option>
                                       <option value="1">Ch</option>
                                       <option value="2">Hi</option>
                                       <option value="3">Sp</option>
                                       <option value="4">Tu</option>
                                    </select>
                                </div>
                            </div>
                            <ul className="footer-nav">
                                <li><Link href="/index-5">Privacy Policy</Link></li>
                                <li><Link href="/index-5">Terms & Conditions</Link></li>
                                <li><Link href="/index-5">Refund Policy</Link></li>
                                <li><Link href="/index-5">Legal</Link></li>
                            </ul>
                        </div>
                        <div className="right-column">
                            <ul className="download-list">
                                <li className="app-store">
                                    <Link href="/index-5"><i className="flaticon-apple"></i>App Store</Link>
                                </li>
                                <li className="play-store">
                                    <Link href="/index-5"><img src="assets/images/icons/icon-18.png" alt=""/>Google Play</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom centred">
                    <p>&copy; {new Date().getFullYear()} <Link href="/index-5">Fxvibe</Link> Made with Expertise, All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    </>
  )
}
