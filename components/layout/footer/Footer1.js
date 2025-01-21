import Link from "next/link"

export default function Footer1() {
    return (
        <>
        <footer className="main-footer bg-color-2">
            <div className="footer-top">
                <div className="auto-container">
                    <div className="footer-top-content">
                        <div className="form-inner">
                            <form method="post" action="contact.html">
                                <div className="form-group">
                                    <input type="email" name="email" placeholder="Your email address..."/>
                                    <button type="submit" className="theme-btn"><span>subscribe</span></button>
                                </div>
                            </form>
                            <h2>Become a part</h2>
                        </div>
                        <div className="lower-box">
                            <h2>of our update community...</h2>
                            <div className="subscriber-box">
                                <figure className="thumb-box"><img src="assets/images/resource/thumb-1.jpg" alt=""/></figure>
                                <span>5M+</span>
                                <h6>Subscribers</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="widget-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget logo-widget">
                                <figure className="footer-logo"><Link href="/"><img src="assets/images/logo-2.png" alt=""/></Link></figure>
                                <p>Access valuable insights and expertise download free trading guides today!..</p>
                                <div className="link-box">
                                    <div className="icon-box"><i className="flaticon-book"></i></div>
                                    <h6><Link href="/">Free <br />Trading Guides <i className="flaticon-right-arrow"></i></Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h3>Contact</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><Link href="/">Email Us</Link></li>
                                        <li><Link href="/">Help Center</Link></li>
                                        <li><Link href="/faq">Faq’s</Link></li>
                                        <li><Link href="/">Live Chat</Link></li>
                                    </ul>
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
                                                <li><Link href="/">Home</Link></li>
                                                <li><Link href="/">Story</Link></li>
                                                <li><Link href="/">History</Link></li>
                                                <li><Link href="/team">Our Team</Link></li>
                                                <li><Link href="/">Trading Rules</Link></li>
                                                <li><Link href="/blog">Blog Post</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 links-column">
                                            <ul className="links-list clearfix">
                                                <li><Link href="/">Markets</Link></li>
                                                <li><Link href="/">Evaluations</Link></li>
                                                <li><Link href="/">Affiliates</Link></li>
                                                <li><Link href="/">Pricing</Link></li>
                                                <li><Link href="/">Get Funded</Link></li>
                                                <li><Link href="/">Course</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget contact-widget">
                                <div className="widget-title">
                                    <h3>Social Connect</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="social-links">
                                        <li><Link href="/"><i className="flaticon-facebook"></i></Link></li>
                                        <li><Link href="/"><i className="flaticon-user"></i></Link></li>
                                        <li><Link href="/"><i className="flaticon-instagram-logo"></i></Link></li>
                                        <li><Link href="/"><i className="flaticon-youtube"></i></Link></li>
                                    </ul>
                                    <ul className="download-list">
                                        <li className="app-store">
                                            <Link href="/"><i className="flaticon-apple"></i>App Store</Link>
                                        </li>
                                        <li className="play-store">
                                            <Link href="/"><img src="assets/images/icons/icon-18.png" alt=""/>Google Play</Link>
                                        </li>
                                    </ul>
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
                            <p>&copy; {new Date().getFullYear()} <a href="/">Fxvibe</a> Made with Expertise, All Rights Reserved.</p>
                        </div>
                        <ul className="footer-nav">
                            <li><Link href="/">Privacy Policy</Link></li>
                            <li><Link href="/">Terms & Conditions</Link></li>
                            <li><Link href="/">Legal</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

        </>
    )
}
