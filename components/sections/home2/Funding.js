'use client'
import { useState } from "react"
import Link from "next/link"

export default function Funding() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

  return (
    <>
      <section className="funding-style-two bg-color-3 sec-pad">
            <div className="auto-container">
                <div className="sec-title centred light">
                    <h6>Join Fxvibe</h6>
                    <h2>Enter a trading challenge</h2>
                </div>
                <div className="tabs-box">
                    <h3>Select Your Account Size</h3>
                    <div className="tab-btn-box centred">
                        <ul className="tab-btns tab-buttons clearfix">
                            <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "p-tab-btn active-btn" : "tab-btn"}>$10,000</li>
                            <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "p-tab-btn active-btn" : "tab-btn"}>$20,000</li>
                            <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "p-tab-btn active-btn" : "tab-btn"}>$50,000</li>
                            <li onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "p-tab-btn active-btn" : "tab-btn"}>$75,000</li>
                            <li onClick={() => handleOnClick(5)} className={activeIndex === 5 ? "p-tab-btn active-btn" : "tab-btn"}>$1,00,000</li>
                        </ul>
                    </div>
                    <div className="tabs-content">
                        <div className={activeIndex === 1 ? "tab p-tab active-tab" : "tab"}>
                            <div className="table-outer">
                                <table className="funding-table">
                                    <thead className="table-header">
                                        <tr>
                                            <th>
                                                <div className="title-header">
                                                    <div className="title">Services for <br />your funding amount</div>
                                                    <figure className="shape"><img src="assets/images/shape/shape-8.png" alt=""/></figure>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="title-box">
                                                    <div className="title">Phase 1</div>
                                                    <p>Single-phase assessment</p>
                                                    <Link href="/index-2"><span>Start Trading</span></Link>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="title-box">
                                                    <div className="title">Phase 2</div>
                                                    <p>Two-phase assessment</p>
                                                    <Link href="/index-2"><span>Start Trading</span></Link>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="title-box">
                                                    <div className="title">Funded</div>
                                                    <p>Single-phase assessment</p>
                                                    <Link href="/index-2"><span>Start Trading</span></Link>
                                                </div>
                                            </th>
                                        </tr>    
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h6>Target</h6>
                                            </td>
                                            <td>
                                                <h5>$800</h5>
                                            </td>
                                            <td>
                                                <h5>$800</h5>
                                            </td>
                                            <td>
                                                <h5>$800</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Min.Trading Days</h6>
                                            </td>
                                            <td>
                                                <h5>5 Days</h5>
                                            </td>
                                            <td>
                                                <h5>5 Days</h5>
                                            </td>
                                            <td>
                                                <h5>5 Days</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Daily Drawdown</h6>
                                            </td>
                                            <td>
                                                <h5>5%</h5>
                                            </td>
                                            <td>
                                                <h5>5%</h5>
                                            </td>
                                            <td>
                                                <h5>5%</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Max.Drawdown</h6>
                                            </td>
                                            <td>
                                                <h5>10%</h5>
                                            </td>
                                            <td>
                                                <h5>10%</h5>
                                            </td>
                                            <td>
                                                <h5>10%</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Trading Period</h6>
                                            </td>
                                            <td>
                                                <h5>No Limit</h5>
                                            </td>
                                            <td>
                                                <h5>No Limit</h5>
                                            </td>
                                            <td>
                                                <h5>No Limit</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Refundable Fee</h6>
                                            </td>
                                            <td>
                                                <h5>$99 O/T</h5>
                                            </td>
                                            <td>
                                                <h5>$99 O/T</h5>
                                            </td>
                                            <td>
                                                <h5>$99 O/T</h5>
                                            </td>
                                        </tr>
                                    </tbody>    
                                </table>
                            </div>
                        </div>
                        <div className={activeIndex === 2 ? "tab p-tab active-tab" : "tab"} id="standard">
                            <div className="table-outer">
                                <table className="funding-table">
                                    <thead className="table-header">
                                        <tr>
                                            <th>
                                                <div className="title-header">
                                                    <div className="title">Services for <br />your funding amount</div>
                                                    <figure className="shape"><img src="assets/images/shape/shape-8.png" alt=""/></figure>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="title-box">
                                                    <div className="title">Phase 1</div>
                                                    <p>Single-phase assessment</p>
                                                    <Link href="/index-2"><span>Start Trading</span></Link>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="title-box">
                                                    <div className="title">Phase 2</div>
                                                    <p>Two-phase assessment</p>
                                                    <Link href="/index-2"><span>Start Trading</span></Link>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="title-box">
                                                    <div className="title">Funded</div>
                                                    <p>Single-phase assessment</p>
                                                    <Link href="/index-2"><span>Start Trading</span></Link>
                                                </div>
                                            </th>
                                        </tr>    
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h6>Target</h6>
                                            </td>
                                            <td>
                                                <h5>$1600</h5>
                                            </td>
                                            <td>
                                                <h5>$1600</h5>
                                            </td>
                                            <td>
                                                <h5>$1600</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Min.Trading Days</h6>
                                            </td>
                                            <td>
                                                <h5>10 Days</h5>
                                            </td>
                                            <td>
                                                <h5>10 Days</h5>
                                            </td>
                                            <td>
                                                <h5>10 Days</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Daily Drawdown</h6>
                                            </td>
                                            <td>
                                                <h5>10%</h5>
                                            </td>
                                            <td>
                                                <h5>10%</h5>
                                            </td>
                                            <td>
                                                <h5>10%</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Max.Drawdown</h6>
                                            </td>
                                            <td>
                                                <h5>20%</h5>
                                            </td>
                                            <td>
                                                <h5>20%</h5>
                                            </td>
                                            <td>
                                                <h5>20%</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Trading Period</h6>
                                            </td>
                                            <td>
                                                <h5>No Limit</h5>
                                            </td>
                                            <td>
                                                <h5>No Limit</h5>
                                            </td>
                                            <td>
                                                <h5>No Limit</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Refundable Fee</h6>
                                            </td>
                                            <td>
                                                <h5>$99 O/T</h5>
                                            </td>
                                            <td>
                                                <h5>$99 O/T</h5>
                                            </td>
                                            <td>
                                                <h5>$99 O/T</h5>
                                            </td>
                                        </tr>
                                    </tbody>    
                                </table>
                            </div>
                        </div>
                        <div className={activeIndex === 3 ? "tab p-tab active-tab" : "tab"} id="standard2">
                            <div className="table-outer">
                                <table className="funding-table">
                                    <thead className="table-header">
                                        <tr>
                                            <th>
                                                <div className="title-header">
                                                    <div className="title">Services for <br />your funding amount</div>
                                                    <figure className="shape"><img src="assets/images/shape/shape-8.png" alt=""/></figure>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="title-box">
                                                    <div className="title">Phase 1</div>
                                                    <p>Single-phase assessment</p>
                                                    <Link href="/index-2"><span>Start Trading</span></Link>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="title-box">
                                                    <div className="title">Phase 2</div>
                                                    <p>Two-phase assessment</p>
                                                    <Link href="/index-2"><span>Start Trading</span></Link>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="title-box">
                                                    <div className="title">Funded</div>
                                                    <p>Single-phase assessment</p>
                                                    <Link href="/index-2"><span>Start Trading</span></Link>
                                                </div>
                                            </th>
                                        </tr>    
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h6>Target</h6>
                                            </td>
                                            <td>
                                                <h5>$4000</h5>
                                            </td>
                                            <td>
                                                <h5>$4000</h5>
                                            </td>
                                            <td>
                                                <h5>$4000</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Min.Trading Days</h6>
                                            </td>
                                            <td>
                                                <h5>15 Days</h5>
                                            </td>
                                            <td>
                                                <h5>15 Days</h5>
                                            </td>
                                            <td>
                                                <h5>15 Days</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Daily Drawdown</h6>
                                            </td>
                                            <td>
                                                <h5>15%</h5>
                                            </td>
                                            <td>
                                                <h5>15%</h5>
                                            </td>
                                            <td>
                                                <h5>15%</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Max.Drawdown</h6>
                                            </td>
                                            <td>
                                                <h5>30%</h5>
                                            </td>
                                            <td>
                                                <h5>30%</h5>
                                            </td>
                                            <td>
                                                <h5>30%</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Trading Period</h6>
                                            </td>
                                            <td>
                                                <h5>No Limit</h5>
                                            </td>
                                            <td>
                                                <h5>No Limit</h5>
                                            </td>
                                            <td>
                                                <h5>No Limit</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Refundable Fee</h6>
                                            </td>
                                            <td>
                                                <h5>$99 O/T</h5>
                                            </td>
                                            <td>
                                                <h5>$99 O/T</h5>
                                            </td>
                                            <td>
                                                <h5>$99 O/T</h5>
                                            </td>
                                        </tr>
                                    </tbody>    
                                </table>
                            </div>
                        </div>
                        <div className={activeIndex === 4 ? "tab p-tab active-tab" : "tab"} id="standard3">
                            <div className="table-outer">
                                <table className="funding-table">
                                    <thead className="table-header">
                                        <tr>
                                            <th>
                                                <div className="title-header">
                                                    <div className="title">Services for <br />your funding amount</div>
                                                    <figure className="shape"><img src="assets/images/shape/shape-8.png" alt=""/></figure>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="title-box">
                                                    <div className="title">Phase 1</div>
                                                    <p>Single-phase assessment</p>
                                                    <Link href="/index-2"><span>Start Trading</span></Link>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="title-box">
                                                    <div className="title">Phase 2</div>
                                                    <p>Two-phase assessment</p>
                                                    <Link href="/index-2"><span>Start Trading</span></Link>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="title-box">
                                                    <div className="title">Funded</div>
                                                    <p>Single-phase assessment</p>
                                                    <Link href="/index-2"><span>Start Trading</span></Link>
                                                </div>
                                            </th>
                                        </tr>    
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h6>Target</h6>
                                            </td>
                                            <td>
                                                <h5>$6000</h5>
                                            </td>
                                            <td>
                                                <h5>$6000</h5>
                                            </td>
                                            <td>
                                                <h5>$6000</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Min.Trading Days</h6>
                                            </td>
                                            <td>
                                                <h5>20 Days</h5>
                                            </td>
                                            <td>
                                                <h5>20 Days</h5>
                                            </td>
                                            <td>
                                                <h5>20 Days</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Daily Drawdown</h6>
                                            </td>
                                            <td>
                                                <h5>20%</h5>
                                            </td>
                                            <td>
                                                <h5>20%</h5>
                                            </td>
                                            <td>
                                                <h5>20%</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Max.Drawdown</h6>
                                            </td>
                                            <td>
                                                <h5>30%</h5>
                                            </td>
                                            <td>
                                                <h5>30%</h5>
                                            </td>
                                            <td>
                                                <h5>30%</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Trading Period</h6>
                                            </td>
                                            <td>
                                                <h5>No Limit</h5>
                                            </td>
                                            <td>
                                                <h5>No Limit</h5>
                                            </td>
                                            <td>
                                                <h5>No Limit</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Refundable Fee</h6>
                                            </td>
                                            <td>
                                                <h5>$99 O/T</h5>
                                            </td>
                                            <td>
                                                <h5>$99 O/T</h5>
                                            </td>
                                            <td>
                                                <h5>$99 O/T</h5>
                                            </td>
                                        </tr>
                                    </tbody>    
                                </table>
                            </div>
                        </div>
                        <div className={activeIndex === 5 ? "tab p-tab active-tab" : "tab"} id="standard4">
                            <div className="table-outer">
                                <table className="funding-table">
                                    <thead className="table-header">
                                        <tr>
                                            <th>
                                                <div className="title-header">
                                                    <div className="title">Services for <br />your funding amount</div>
                                                    <figure className="shape"><img src="assets/images/shape/shape-8.png" alt=""/></figure>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="title-box">
                                                    <div className="title">Phase 1</div>
                                                    <p>Single-phase assessment</p>
                                                    <Link href="/index-2"><span>Start Trading</span></Link>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="title-box">
                                                    <div className="title">Phase 2</div>
                                                    <p>Two-phase assessment</p>
                                                    <Link href="/index-2"><span>Start Trading</span></Link>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="title-box">
                                                    <div className="title">Funded</div>
                                                    <p>Single-phase assessment</p>
                                                    <Link href="/index-2"><span>Start Trading</span></Link>
                                                </div>
                                            </th>
                                        </tr>    
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h6>Target</h6>
                                            </td>
                                            <td>
                                                <h5>$8000</h5>
                                            </td>
                                            <td>
                                                <h5>$8000</h5>
                                            </td>
                                            <td>
                                                <h5>$8000</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Min.Trading Days</h6>
                                            </td>
                                            <td>
                                                <h5>5 Days</h5>
                                            </td>
                                            <td>
                                                <h5>5 Days</h5>
                                            </td>
                                            <td>
                                                <h5>5 Days</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Daily Drawdown</h6>
                                            </td>
                                            <td>
                                                <h5>5%</h5>
                                            </td>
                                            <td>
                                                <h5>5%</h5>
                                            </td>
                                            <td>
                                                <h5>5%</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Max.Drawdown</h6>
                                            </td>
                                            <td>
                                                <h5>10%</h5>
                                            </td>
                                            <td>
                                                <h5>10%</h5>
                                            </td>
                                            <td>
                                                <h5>10%</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Trading Period</h6>
                                            </td>
                                            <td>
                                                <h5>No Limit</h5>
                                            </td>
                                            <td>
                                                <h5>No Limit</h5>
                                            </td>
                                            <td>
                                                <h5>No Limit</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Refundable Fee</h6>
                                            </td>
                                            <td>
                                                <h5>$99 O/T</h5>
                                            </td>
                                            <td>
                                                <h5>$99 O/T</h5>
                                            </td>
                                            <td>
                                                <h5>$99 O/T</h5>
                                            </td>
                                        </tr>
                                    </tbody>    
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
