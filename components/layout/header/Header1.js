import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import CustomSelect from '../../elements/CustomSelect'

const options = [
    { value: "1", label: "En" },
    { value: "2", label: "Ch" },
    { value: "3", label: "Hi" },
    { value: "4", label: "Sp" },
    { value: "5", label: "Tu" },
  ];


export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {

    const handleSelectChange = (selectedOption) => {
        console.log("Se", selectedOption);
      };
    
    return (
        <>

        {/* main header */}
        <header className={`main-header ${scroll ? "fixed-header" : ""}`}>

            <div className="header-top">
                <div className="outer-container">
                    <div className="top-inner">
                        <div className="left-column">
                            <div className="login-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-1.png" alt=""/></div>
                                <h5><Link href="/">Login </Link><span>-or</span></h5>
                                <h6><Link href="/">Create your account</Link></h6>
                            </div>
                            <div className="language-box">
                                <div className="icon-box"><i className="flaticon-earth"></i></div>
                                <div className="custom-select">
                                    <CustomSelect options={options} onChange={handleSelectChange} />
                                </div>
                            </div>
                        </div>
                        <div className="text-box">
                            <div className="icon-box"><img src="assets/images/icons/icon-2.png" alt=""/></div>
                            <h6>Traders payouts since 2015: <span>$26,769,485</span></h6>
                        </div>
                        <div className="right-column">
                            <div className="search-box">
                                <form method="post" action="index.html">
                                    <div className="form-group">
                                        <input type="search" name="search-field" placeholder="Search" required/>
                                        <button type="submit"><i className="flaticon-search"></i></button>
                                    </div>
                                </form>
                            </div>
                            <div className="mail-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-3.png" alt=""/></div>
                                <h5>Mail us</h5>
                                <h6><Link href="mailto:sendmail@example.com">sendmail@example.com</Link></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* header lower */}
            <div className="header-lower">
                <div className="outer-container">
                    <div className="outer-box">
                        <div className="logo-box">
                            <figure className="logo"><Link href="/"><img src="assets/images/logo.png" alt=""/></Link></figure>
                        </div>
                        <div className="menu-area clearfix">
                            {/* mobile navigation toggler */}
                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                <i className="icon-bar"></i>
                                <i className="icon-bar"></i>
                                <i className="icon-bar"></i>
                            </div>
                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                        </div>
                        <div className="menu-right-content">
                            <div className="link-box">
                                <div className="icon-box"><i className="flaticon-bandwidth"></i></div>
                                <h6><Link href="/">Start <br />Evaluation <i className="flaticon-right-arrow"></i></Link></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* sticky header */}
            <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                <div className="outer-container">
                    <div className="outer-box">
                        <div className="logo-box">
                            <figure className="logo"><Link href="/"><img src="assets/images/logo.png" alt=""/></Link></figure>
                        </div>
                        <div className="menu-area clearfix">
                            <nav className="main-menu clearfix">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                        </div>
                        <div className="menu-right-content">
                            <div className="link-box">
                                <div className="icon-box"><i className="flaticon-bandwidth"></i></div>
                                <h6><Link href="/">Start <br />Evaluation <i className="flaticon-right-arrow"></i></Link></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MobileMenu handleMobileMenu={handleMobileMenu} />
        </header>
        </>
    )
}
