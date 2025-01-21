'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import React from 'react'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,

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

export default function Footer3() {
    return (
        <>           
            
        <footer className="main-footer style-three">
            <div className="widget-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget logo-widget">
                                <figure className="footer-logo"><Link href="/index-3"><img src="assets/images/logo-5.png" alt=""/></Link></figure>
                                <p>Desire that they cannot foresee the pain and trouble that are bound ensue cases perfectly simple and easy in a free hour.</p>
                                <div className="certifications-inner">
                                    <Swiper {...swiperOptions} className="theme_carousel">
                                        <SwiperSlide>
                                            <div className="single-item">
                                                <div className="inner-box">
                                                    <div className="badge-box">
                                                        <span>Anti Money Laundering</span>
                                                        <div className="text">
                                                            <div className="decore-1"></div>
                                                            <div className="decore-2"></div>
                                                            <h6>aml’23</h6>
                                                        </div>
                                                    </div>
                                                    <p>Compliance <br />with AML & KYC regulations.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-item">
                                                <div className="inner-box">
                                                    <div className="badge-box">
                                                        <span>Anti Money Laundering</span>
                                                        <div className="text">
                                                            <div className="decore-1"></div>
                                                            <div className="decore-2"></div>
                                                            <h6>aml’23</h6>
                                                        </div>
                                                    </div>
                                                    <p>Compliance <br />with AML & KYC regulations.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-item">
                                                <div className="inner-box">
                                                    <div className="badge-box">
                                                        <span>Anti Money Laundering</span>
                                                        <div className="text">
                                                            <div className="decore-1"></div>
                                                            <div className="decore-2"></div>
                                                            <h6>aml’23</h6>
                                                        </div>
                                                    </div>
                                                    <p>Compliance <br />with AML & KYC regulations.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <div className="dots-style-one">
                                            <div className="swiper-pagination"></div>
                                        </div>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h3>Useful Links</h3>
                                </div>
                                <div className="widget-content">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 links-column">
                                            <ul className="links-list clearfix">
                                                <li><Link href="/index-3">Home</Link></li>
                                                <li><Link href="/index-3">Story</Link></li>
                                                <li><Link href="/index-3">History</Link></li>
                                                <li><Link href="/team">Our Team</Link></li>
                                                <li><Link href="/index-3">Trading Rules</Link></li>
                                                <li><Link href="/blog">Blog Post</Link></li>
                                                <li><Link href="/faq">Faq’s</Link></li>
                                                <li><Link href="/contact">Help Center</Link></li>
                                                <li><Link href="/contact">Email Us</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 links-column">
                                            <ul className="links-list clearfix">
                                                <li><Link href="/index-3">Markets</Link></li>
                                                <li><Link href="/index-3">Evaluations</Link></li>
                                                <li><Link href="/index-3">Affiliates</Link></li>
                                                <li><Link href="/index-3">Pricing</Link></li>
                                                <li><Link href="/index-3">Get Funded</Link></li>
                                                <li><Link href="/index-3">Course</Link></li>
                                                <li><Link href="/index-3">Live Chat</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget customer-widget">
                                <div className="widget-content">
                                    <div className="widget-title">
                                        <div className="icon-box"><img src="assets/images/icons/icon-43.png" alt=""/></div>
                                        <h3>Join the Discord Community</h3>
                                    </div>
                                    <p>Become a part our update community.</p>
                                    <ul className="clients-list">
                                        <li><figure className="image"><img src="assets/images/resource/clients-1.png" alt=""/></figure></li>
                                        <li><figure className="image"><img src="assets/images/resource/clients-2.png" alt=""/></figure></li>
                                        <li><figure className="image"><img src="assets/images/resource/clients-3.png" alt=""/></figure></li>
                                        <li><span>10k+</span></li>
                                        <li><h6>Members</h6></li>
                                    </ul>
                                    <div className="btn-box"><Link href="/index-3" className="theme-btn btn-two"><span>Accept Our Invite</span></Link></div>
                                    <div className="active-text"><span>4,235 Members in Online.</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="bottom-inner">
                        <div className="copyright">
                            <p>&copy; {new Date().getFullYear()} <a href="index.html">Fxvibe</a> Made with Expertise, All Rights Reserved.</p>
                        </div>
                        <ul className="footer-nav">
                            <li><Link href="/index-3">Privacy Policy</Link></li>
                            <li><Link href="/index-3">Terms & Conditions</Link></li>
                            <li><Link href="/index-3">Legal</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>


        </>
    )
}
