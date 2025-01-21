import Link from "next/link"

export default function Footer4() {
    return (
        <>           
            
        <div className="footer-contact-area">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-28.png)" }}></div>
            <section className="contact-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                            <div className="form-inner">
                                <div className="sec-title">
                                    <h6>Get in Touch</h6>
                                    <h2>Let's chat, Drop us a line!</h2>
                                </div>
                                <ul className="info-list">
                                    <li><Link href="tel:18007661234">+1 800 766-1234</Link></li>
                                    <li><Link href="mailto:sendmail@example.com">sendmail@example.com</Link></li>
                                </ul>
                                <form method="post" action="/index-4">
                                    <div className="row clearfix">
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <input type="text" name="name" placeholder="Name*" required/>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="email" name="email" placeholder="Email*" required/>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="phone" placeholder="Phone" required/>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <div className="select-box">
                                                <select className="selectmenu">
                                                    <option>I'm looking for*</option>
                                                    <option>Currency Pairs</option>
                                                    <option>Platform & Tools</option>
                                                    <option>Monitoring & Support</option>
                                                    <option>Education & Training</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <textarea name="message" placeholder="Your Message..."></textarea>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <div className="message-btn">
                                                <div className="check-box">
                                                    <input className="check" type="checkbox" id="checkbox7"/>
                                                    <label for="checkbox7">Accept the terms and conditions</label>
                                                </div>
                                                <button type="submit" className="theme-btn btn-two"><span>Send Message</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="bg-layer" style={{ backgroundImage: "url(assets/images/resource/contact-1.jpg)" }}></div>
                                <div className="special-text">
                                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-27.png)" }}></div>
                                    <h6><img src="assets/images/icons/icon-63.png" alt=""/> Say Hi & Hello</h6>
                                </div>
                                <div className="icon-box"><img src="assets/images/icons/icon-43.png" alt=""/></div>
                                <h3>Participate in <br />Our Discord Community.</h3>
                                <p>Be a part of our update community.</p>
                                <Link href="/index-4" className="theme-btn btn-one"><span>Accept Our Invite</span></Link>
                                <div className="text-box centred"><span className="active-text">4,235 Members in Online.</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <footer className="footer-style-four">
                <div className="auto-container">
                    <div className="footer-top">
                        <div className="footer-top-inner">
                            <figure className="footer-logo"><a href="/index-4"><img src="assets/images/logo-7.png" alt=""/></a></figure>
                            <div className="footer-top-info">
                                <p>&copy; {new Date().getFullYear()} <Link href="/index-4">Fxvibe.</Link> All Rights Reserved.</p>
                                <ul className="footer-nav">
                                    <li><Link href="/index-4">Privacy Policy</Link></li>
                                    <li><Link href="/index-4">Terms & Conditions</Link></li>
                                    <li><Link href="/index-4">Refund Policy</Link></li>
                                    <li><Link href="/index-4">Legal</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="widget-section">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget newsletter-widget">
                                    <div className="widget-title">
                                        <h6>Newsletter</h6>
                                    </div>
                                    <div className="widget-content">
                                        <p>Get the Latest - Subscribe Instantly</p>
                                        <form method="post" action="contact.html">
                                            <div className="form-group">
                                                <input type="email" name="email" placeholder="Email address..." required/>
                                                <button type="submit"><i className="flaticon-right-arrow"></i></button>
                                            </div>
                                        </form>
                                        <ul className="list-style-four clearfix">
                                            <li>Insights and Analysis</li>
                                            <li>Trading Strategies and Tips</li>
                                            <li>Offers & discounts</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12 footer-column">
                                <div className="footer-widget social-widget">
                                    <div className="widget-title">
                                        <h6>Social</h6>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="social-list clearfix">
                                            <li><Link href="/index-4"><i className="fa-brands fa-facebook"></i>Facebook</Link></li>
                                            <li><Link href="/index-4"><i className="fa-brands fa-square-twitter"></i>Twitter</Link></li>
                                            <li><Link href="/index-4"><i className="fa-brands fa-instagram"></i>Instagram</Link></li>
                                            <li><Link href="/index-4"><i className="fa-brands fa-youtube"></i>Youtube</Link></li>
                                            <li><Link href="/index-4"><i className="fa-brands fa-linkedin"></i>Linkedin</Link></li>
                                            <li><Link href="/index-4"><i className="fa-brands fa-square-pinterest"></i>Pinterest</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h6>Trading</h6>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><Link href="/index-4">Markets</Link></li>
                                            <li><Link href="/index-4">Evaluations</Link></li>
                                            <li><Link href="/index-4">Affiliates</Link></li>
                                            <li><Link href="/index-4">Pricing</Link></li>
                                            <li><Link href="/index-4">Trading Rules</Link></li>
                                            <li><Link href="/index-4">Get Funded</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h6>About Us</h6>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><Link href="/index-4">Home</Link></li>
                                            <li><Link href="/index-4">Story</Link></li>
                                            <li><Link href="/index-4">History</Link></li>
                                            <li><Link href="team.html">Our Team</Link></li>
                                            <li><Link href="blog.html">Blog Post</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h6>Contact</h6>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><Link href="contact.html">Email Us</Link></li>
                                            <li><Link href="/index-4">Help Center</Link></li>
                                            <li><Link href="faq.html">Faq’s</Link></li>
                                            <li><Link href="team.html">Live Chat</Link></li>
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
                            <ul className="footer-card">
                                <li><h6>We Accept:</h6></li>
                                <li><Link href="/index-4"><img src="assets/images/icons/card-1.png" alt=""/></Link></li>
                                <li><Link href="/index-4"><img src="assets/images/icons/card-2.png" alt=""/></Link></li>
                                <li><Link href="/index-4"><img src="assets/images/icons/card-3.png" alt=""/></Link></li>
                                <li><Link href="/index-4"><img src="assets/images/icons/card-4.png" alt=""/></Link></li>
                            </ul>
                            <a className="scroll-to-target" href="#top">Back to Top <i className="flaticon-turn-up"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>


        </>
    )
}
