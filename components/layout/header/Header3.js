import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-three"> */}
            
            <header className={`main-header header-style-three ${scroll ? "fixed-header" : ""}`}>
                {/* header lower */}
                <div className="header-lower">
                    <div className="outer-container">
                        <div className="outer-box">
                            <div className="main-column">
                                <figure className="logo-box">
                                    <Link href="/index-3">
                                    <img src="assets/images/logo-5.png" alt="/" />
                                    </Link>
                                </figure>
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
                            </div>
                            <div className="menu-right-content">
                                <div className="login-box"> 
                                    <Link href="/index-3"><i className="flaticon-user"></i>Users Login</Link>
                                </div>
                                <div className="support-box">
                                    <figure className="image-box"><img src="assets/images/resource/support-1.png" alt=""/></figure>
                                    <Link href="tel:18007661234">+1 800 766-1234</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* sticky header */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="outer-container">
                        <div className="outer-box">
                            <div className="main-column">
                                <figure className="logo-box">
                                    <Link href="/index-3">
                                    <img src="assets/images/logo-5.png" alt="/" />
                                    </Link>
                                </figure>
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
                            </div>
                            <div className="menu-right-content">
                                <div className="login-box"> 
                                    <Link href="/index-3"><i className="flaticon-user"></i>Users Login</Link>
                                </div>
                                <div className="support-box">
                                    <figure className="image-box"><img src="assets/images/resource/support-1.png" alt=""/></figure>
                                    <Link href="tel:18007661234">+1 800 766-1234</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />
            

            
        </>
    )
}
