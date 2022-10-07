import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiChevronDown } from "react-icons/bi";

// import Service from '../Service/Service';
const NavBar = () => {
    return (
        <nav className="flex items-center md:px-20 bg-white w-full shadow">
            <div className="flex items-center">
                <NavLink to="/" itemprop="url" title="GHN - Giao Hàng Nhanh Toàn Quốc">
                    <img itemprop="logo" src="//theme.hstatic.net/200000472237/1000829412/14/logo.png?v=481" alt="GHN - Giao Hàng Nhanh Toàn Quốc" className="logoimg" />
                </NavLink>
            </div>
            <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold mr-0">
                <li className="btn-hover"><NavLink to="/">TRANG CHỦ</NavLink></li>
                <li className="btn-hover"><NavLink to="/introduce">VỀ CHÚNG TÔI</NavLink></li>
                <li className="btn-hover"><NavLink to="/search">TRA CỨU</NavLink></li>
                <li className="dropdown">
                    <NavLink className="dropbtn" to="/service">DỊCH VỤ<BiChevronDown className="icon-dropdown" /></NavLink>
                    <div className="dropdown-content">
                        <div className="dropdown-list">
                            <div className="dropdown-content-left">
                                <NavLink to="/" title="GHN EXPRESS">
                                    <div className='dropdown-flex'>
                                        <img src="//theme.hstatic.net/200000472237/1000829412/14/mega-icon-sv-l1.png?v=480" alt="" className="mega-icon" />
                                        <div className="mega-text">
                                            <h3 className="col-mega-title">GHN EXPRESS</h3>
                                            <p>Dịch vụ giao hàng thương mại điện tử, giao nhanh toàn quốc, miễn phí thu hộ COD, miễn phí giao lại, miễn phí trả hàng.</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="dropdown-content-right">
                                <NavLink to="/" title="GHN FULFILLMENT">
                                    <div className='dropdown-flex'>
                                        <img src="//theme.hstatic.net/200000472237/1000829412/14/mega-icon-sv-l1.png?v=480" alt="" className="mega-icon" />
                                        <div className="mega-text">
                                            <h3 className="col-mega-title">GHN FULFILLMENT</h3>
                                            <p>Dịch vụ kho bãi và xử lý hàng hóa, diện tích kho bãi hơn 100.000m2 giúp bạn tối ưu nhu cầu xuất-nhập-tồn kho.</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="dropdown-content-last">
                                <NavLink to="/" title="AHAMOVE">
                                    <div className='dropdown-flex'>
                                        <img src="//theme.hstatic.net/200000472237/1000829412/14/mega-icon-sv-l1.png?v=480" alt="" className="mega-icon" />
                                        <div className="mega-text">
                                            <h3 className="col-mega-title">AHAMOVE</h3>
                                            <p className="3">Dịch vụ giao hàng tức thời 30 phút - 4 giờ trong nội thành Hồ Chí Minh và Hà Nội.</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="btn-hover"><NavLink to="/policy">CHÍNH SÁCH</NavLink></li>
                <button className="btn-signIn"><NavLink to="/login">ĐĂNG KÝ/ ĐĂNG NHẬP</NavLink></button>

            </ul>
        </nav>
    );
}
export default NavBar;