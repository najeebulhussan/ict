import Link from "next/link"

export default function Banner() {
  return (
    <>
      <section className="banner-style-two bg-color-3">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-7.png)" }}></div>
            <div className="outer-container">
                <div className="inner-box">
                    <div className="content-box">
                        <h6>Welcome to FXVibe</h6>
                        <h2>Navigate <span>Markets</span> with Confidence</h2>
                        <h5>Download Mobile App</h5>
                        <ul className="download-list">
                            <li><Link href="/index-2"><i className="flaticon-apple"></i></Link></li>
                            <li><Link href="/index-2"><img src="assets/images/icons/icon-18.png" alt=""/></Link></li>
                        </ul>
                    </div>
                    <div className="image-box">
                        <figure className="image">
                            <div className="logo"><img src="assets/images/logo-3.png" alt=""/></div>
                            <img src="assets/images/banner/banner-img-4.jpg" alt=""/>
                        </figure>
                        <div className="image-content">
                            <h6>Last Year Winnig Ratio</h6>
                            <h3>84.65%</h3>
                            <p><i className="flaticon-right-up"></i>+6.39%</p>
                            <div className="bar"><img src="assets/images/icons/bar-1.png" alt=""/></div>
                        </div>
                    </div>
                </div>
                <div className="text-inner">
                    <p>Belongs to those who fail in their duty through weakness of will <br />saying through shrinking from toil & pain.</p>
                    <Link href="/index-2" className="theme-btn"><span>Start Trading</span></Link>
                </div>
            </div>
        </section>
    </>
  )
}
