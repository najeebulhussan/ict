import Link from "next/link"

export default function Footer2() {
    return (
        <>           
            
        <footer className="footer-style-two bg-color-4">
            <div className="widget-section">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-15.png)" }}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget logo-widget">
                                <figure className="footer-logo"><Link href="/index-2"><img src="assets/images/logo-4.png" alt=""/></Link></figure>
                                <p>Take a look at ratings to gauge our performance and customer satisfaction.</p>
                                <h5>Rated 4.9/5</h5>
                                <ul className="rating">
                                    <li><i className="flaticon-rate-star-button"></i></li>
                                    <li><i className="flaticon-rate-star-button"></i></li>
                                    <li><i className="flaticon-rate-star-button"></i></li>
                                    <li><i className="flaticon-rate-star-button"></i></li>
                                    <li><i className="flaticon-rate-star-button"></i></li>
                                </ul>
                                <h6>Reviewed by 1.5 million traders on Trustpilot.</h6>
                                <Link href="/index-2" className="theme-btn btn-two"><span>Read Reviews</span></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h3>Useful Links</h3>
                                </div>
                                <div className="widget-content">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 list-column">
                                            <ul className="links-list clearfix">
                                                <li><Link href="/index-2">Home</Link></li>
                                                <li><Link href="/index-2">Story</Link></li>
                                                <li><Link href="/index-2">History</Link></li>
                                                <li><Link href="/team">Our Team</Link></li>
                                                <li><Link href="/index-2">Trading Rules</Link></li>
                                                <li><Link href="/blog">Blog Post</Link></li>
                                                <li><Link href="/faq">Faq’s</Link></li>
                                                <li><Link href="/index-2">Help Center</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 list-column">
                                            <ul className="links-list clearfix">
                                                <li><Link href="/index-2">Markets</Link></li>
                                                <li><Link href="/index-2">Evaluations</Link></li>
                                                <li><Link href="/index-2">Affiliates</Link></li>
                                                <li><Link href="/index-2">Pricing</Link></li>
                                                <li><Link href="/index-2">Get Funded</Link></li>
                                                <li><Link href="/index-2">Course</Link></li>
                                                <li><Link href="/index-2">Live Chat</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget contact-widget">
                                <div className="widget-title">
                                    <h3>Support</h3>
                                </div>
                                <div className="widget-content">
                                    <p>Find our office!</p>
                                    <span className="address">Fxvibe, 191 Integer Rd, 2nd St, <br />LA 08219 USA.</span>
                                    <p>Prefer emailing us!</p>
                                    <h5><Link href="mailto:sendmail@example.com">sendmail@example.com</Link></h5>
                                    <p>Prefer call us!</p>
                                    <h5><Link href="tel:18007661234">+1 800 766-1234</Link></h5>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/index-2"><i className="flaticon-facebook"></i></Link></li>
                                        <li><Link href="/index-2"><i className="flaticon-user"></i></Link></li>
                                        <li><Link href="/index-2"><i className="flaticon-instagram-logo"></i></Link></li>
                                        <li><Link href="/index-2"><i className="flaticon-video-camera"></i></Link></li>
                                        <li><Link href="/index-2"><i className="flaticon-youtube"></i></Link></li>
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
                            <p>&copy; {new Date().getFullYear()} <a href="index.html">Fxvibe</a> Made with Expertise, All Rights Reserved.</p>
                        </div>
                        <ul className="footer-nav">
                            <li><Link href="/index-2">Privacy Policy</Link></li>
                            <li><Link href="/index-2">Terms & Conditions</Link></li>
                            <li><Link href="/index-2">Legal</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>


        </>
    )
}
