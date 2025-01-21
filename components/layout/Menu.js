import Link from "next/link"

export default function Menu() {

    return (
        <>

            <ul className="navigation clearfix">
                <li className="dropdown"><Link href="/">Home</Link>
                    <ul>
                        <li><Link href="/">Home Page 01</Link></li>
                        <li><Link href="/index-2">Home Page 02</Link></li>
                        <li><Link href="/index-3">Home Page 03</Link></li>
                        <li><Link href="/index-4">Home Page 04</Link></li>
                        <li><Link href="/index-5">Home Page 05</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">About</Link>
                    <ul>
                        <li><Link href="/about">About Company</Link></li>
                        <li><Link href="/history">History</Link></li>
                        <li><Link href="/team">Team Members</Link></li>
                        <li><Link href="/faq">Faq’s</Link></li>
                        <li><Link href="/error">404</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Trading</Link>
                    <ul>
                        <li className="dropdown"><Link href="#">Accounts</Link>
                            <ul>
                                <li><Link href="/account-1">Accounts Overview</Link></li>
                                <li><Link href="/account-2">Demo Account</Link></li>
                                <li><Link href="/account-3">Individual Account</Link></li>
                                <li><Link href="/account-4">Professional Account</Link></li>
                                <li><Link href="/account-5">VIP Account</Link></li>
                                <li><Link href="/account-6">ECN Account</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="#">Platform</Link>
                            <ul>
                                <li><Link href="/trader-1">MetaTrader 4</Link></li>
                                <li><Link href="/trader-2">MetaTrader 5</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="#">Education</Link>
                            <ul>
                                <li><Link href="/education">Education</Link></li>
                                <li><Link href="/education-details">Education Details</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Services</Link>
                    <ul>
                        <li><Link href="/service">Services Overview</Link></li>
                        <li><Link href="/service-details">Currency Pairs</Link></li>
                        <li><Link href="/service-details-2">Trading Accounts</Link></li>
                        <li><Link href="/service-details-3">Platform & Tools</Link></li>
                        <li><Link href="/service-details-4">Monitoring & Support</Link></li>
                        <li><Link href="/service-details-5">Education & Training</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Blog</Link>
                    <ul>
                        <li><Link href="/blog">Grid View 01</Link></li>
                        <li><Link href="/blog-2">Grid View 02</Link></li>
                        <li><Link href="/blog-3">List View 01</Link></li>
                        <li><Link href="/blog-4">List View 02</Link></li>
                        <li><Link href="/blog-details">Single Post</Link></li>
                    </ul>
                </li> 
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}
