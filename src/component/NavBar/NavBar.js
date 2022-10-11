import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiChevronDown } from "react-icons/bi";
import { useEffect } from 'react';
import axiosClient from '../../config/axiosClient';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../slices/user';
import { useState } from 'react';
import { BsFillGearFill } from "react-icons/bs";
import { BsFillForwardFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

// import Service from '../Service/Service';
const NavBar = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        axiosClient.get('/user')
            .then((res) => {
                dispatch(setUser(res.data));
            })
            .catch((err) => console.log(err));
    }, []);

    const user = useSelector((state) => state.user.value);

    return (
        <nav className="flex items-center md:px-20 bg-white w-full shadow">
            <div className="flex items-center">
                <NavLink to="/" itemprop="url" title="GHN - Giao Hàng Nhanh Toàn Quốc">
                    <img itemprop="logo" src="//theme.hstatic.net/200000472237/1000829412/14/logo.png?v=481" alt="GHN - Giao Hàng Nhanh Toàn Quốc" className="logoimg" />
                </NavLink>
            </div>
            <ul className="md:flex md:gap-8 ml-auto text-15 font-semibold mr-0">
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
            </ul>
            <button className="btn-signIn"><NavLink to="/login">ĐĂNG KÝ/ ĐĂNG NHẬP</NavLink></button>

            {/* +++User++++ */}
            {/* <div className="dropdown-acc">
                <NavLink className="dropbtn-acc" to="/service">Lê Thị Khánh Hoà<BiChevronDown className="icon-dropdown-acc" /></NavLink>
                <div class="menu-account-dropdown">
                    <div className="dropdown-list-acc">
                        <div class="menu-account-dropdown-item-top">
                            <NavLink to="/" title="GHN EXPRESS">
                                <div className='menu-flex'>
                                    <BsPencilSquare className="icon-menu-acc" />
                                    <span>パスワード変更</span>
                                </div>
                            </NavLink>
                        </div>
                        <a class="menu-account-dropdown-item">
                            <NavLink to="/" title="GHN EXPRESS">
                                <div className='menu-flex'>
                                    <BsFillGearFill className="icon-menu-acc" />
                                    <span>パスワード変更</span>
                                </div>
                            </NavLink>
                        </a>
                        <a class="menu-account-dropdown-item">
                            <NavLink to="/" title="GHN EXPRESS">
                                <div className='menu-flex'>
                                    <BsFillForwardFill className="icon-menu-acc" />
                                    <span>Log</span>
                                </div>
                            </NavLink>
                        </a>
                    </div>
                </div>
            </div> */}
        </nav>
    );
}
export default NavBar;