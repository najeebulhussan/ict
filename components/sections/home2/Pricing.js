import Link from "next/link"

export default function Pricing() {
  return (
    <>
      <section className="pricing-section bg-color-4">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 title-column">
                        <div className="sec-title">
                            <h6>Popular Pairs</h6>
                            <h2>Major pairs & Pricing in market</h2>
                            <p>With average spreads of 0.0 and our $2.25 per side commission, it's time you paid less.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                        <div className="pricing-block-one">
                            <div className="inner-box">
                                <div className="currency-box">
                                    <ul className="list-item">
                                        <li><img src="assets/images/icons/flag-1.png" alt=""/>eur</li>
                                        <li><img src="assets/images/icons/flag-2.png" alt=""/>usd</li>
                                    </ul>
                                </div>
                                <div className="content-box">
                                    <ul className="list-item clearfix">
                                        <li>Sell<span>Buy</span></li>
                                        <li className="vilote">$1.06199<span className="yellow">$1.06185</span></li>
                                        <li>Spread <br/><span className="green">-0.14</span><Link href="/index-2">Trade</Link></li>
                                    </ul>
                                </div>
                                <div className="graph-box">
                                    <div className="graph"><img src="assets/images/icons/graph-2.png" alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                        <div className="pricing-block-one">
                            <div className="inner-box">
                                <div className="currency-box">
                                    <ul className="list-item">
                                        <li><img src="assets/images/icons/flag-3.png" alt=""/>gbp</li>
                                        <li><img src="assets/images/icons/flag-4.png" alt=""/>usd</li>
                                    </ul>
                                </div>
                                <div className="content-box">
                                    <ul className="list-item clearfix">
                                        <li>Sell<span>Buy</span></li>
                                        <li className="vilote">$0.65982<span className="yellow">$0.65994</span></li>
                                        <li>Spread <br/><span className="green">+0.12</span><Link href="/index-2">Trade</Link></li>
                                    </ul>
                                </div>
                                <div className="graph-box">
                                    <div className="graph"><img src="assets/images/icons/graph-2.png" alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                        <div className="pricing-block-one">
                            <div className="inner-box">
                                <div className="currency-box">
                                    <ul className="list-item">
                                        <li><img src="assets/images/icons/flag-5.png" alt=""/>aud</li>
                                        <li><img src="assets/images/icons/flag-6.png" alt=""/>cad</li>
                                    </ul>
                                </div>
                                <div className="content-box">
                                    <ul className="list-item clearfix">
                                        <li>Sell<span>Buy</span></li>
                                        <li className="vilote">$14.785<span className="yellow">$13.625</span></li>
                                        <li>Spread <br/><span className="red">-1.16</span><Link href="/index-2">Trade</Link></li>
                                    </ul>
                                </div>
                                <div className="graph-box">
                                    <div className="graph"><img src="assets/images/icons/graph-3.png" alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                        <div className="pricing-block-one">
                            <div className="inner-box">
                                <div className="currency-box">
                                    <ul className="list-item">
                                        <li><img src="assets/images/icons/flag-7.png" alt=""/>eur</li>
                                        <li><img src="assets/images/icons/flag-8.png" alt=""/>usd</li>
                                    </ul>
                                </div>
                                <div className="content-box">
                                    <ul className="list-item clearfix">
                                        <li>Sell<span>Buy</span></li>
                                        <li className="vilote">$1.06199<span className="yellow">$1.06185</span></li>
                                        <li>Spread <br/><span className="red">-0.14</span><Link href="/index-2">Trade</Link></li>
                                    </ul>
                                </div>
                                <div className="graph-box">
                                    <div className="graph"><img src="assets/images/icons/graph-3.png" alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-inner bg-color-3">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                    <div className="text-box">
                                        <h3>Spreads tool & Leading spreads <br />for yourself.</h3>
                                        <Link href="/index-2" className="theme-btn btn-two"><span>More Pairs</span></Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 links-column">
                                    <ul className="list-item">
                                        <li>Cost Evaluation</li>
                                        <li>Choosing Currency Pairs</li>
                                        <li>Optimizing Strategies</li>
                                        <li>Timing Trades</li>
                                        <li>Risk Management</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
