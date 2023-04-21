import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiChevronDown } from "react-icons/bi";
import { useEffect } from 'react';
import axiosClient from '../../config/axiosClient';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../slices/user';
import { useState } from 'react';
import { BsFillForwardFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { Typography } from '@mui/material';

// import Service from '../Service/Service';
const NavBar = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const hasToken = localStorage.getItem("accessTokenFD");
        if (hasToken !== "") {
            console.log("aaa");
            axiosClient.get('/user')
                .then((res) => {
                    dispatch(setUser(res.data));
                })
                .catch((err) => console.log(err));
        }
    }, []);

    const user = useSelector((state) => state.user.value);
    const userLogOut = () => {
        dispatch(setUser(null));
        localStorage.setItem("accessTokenFD", "");
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }
    return (
        <nav className="flex items-center md:px-20 bg-white w-full shadow">
            <div className="flex items-center">
                <NavLink to="/" itemprop="url" title="Fast-Delivery - Giao Hàng Nhanh Toàn Quốc">
                    <Typography variant="h3">Fast Delivery</Typography>
                </NavLink>y
            </div>
            <ul className="md:flex md:gap-8 ml-auto text-15 font-semibold mr-0">
                <li className="btn-hover"><NavLink to="/">ホームページ</NavLink></li>
                <li className="btn-hover"><NavLink to="/introduce">情報</NavLink></li>
                <li className="btn-hover"><NavLink to="/search">検索</NavLink></li>
                <li className="dropdown">
                    <NavLink className="dropbtn" to="/service">サービス<BiChevronDown className="icon-dropdown" /></NavLink>
                    <div className="dropdown-content">
                        <div className="dropdown-list">
                            <div className="dropdown-content-left">
                                <NavLink to="/" title="Fast-Delivery EXPRESS">
                                    <div className='dropdown-flex'>
                                        <img src="//theme.hstatic.net/200000472237/1000829412/14/mega-icon-sv-l1.png?v=480" alt="" className="mega-icon" />
                                        <div className="mega-text">
                                            <h3 className="col-mega-title">Fast-Deliveryエクスプレス</h3>
                                            <p>EC配送サービス、全国即日発送、代引き無料、再配達無料、返品無料。</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="dropdown-content-right">
                                <NavLink to="/" title="Fast-Delivery FULFILLMENT">
                                    <div className='dropdown-flex'>
                                        <img src="//theme.hstatic.net/200000472237/1000829412/14/mega-icon-sv-l1.png?v=480" alt="" className="mega-icon" />
                                        <div className="mega-text">
                                            <h3 className="col-mega-title">Fast-Delivery フルフィルメント</h3>
                                            <p>輸出入在庫のニーズを最適化するのに役立つ100,000m2を超える倉庫エリアを備えた倉庫保管および商品取り扱いサービス。</p>
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
                                            <p className="3">即納サービス 都心で30分～4時間。</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="btn-hover"><NavLink to="/policy">ポリシー</NavLink></li>


            </ul>
            {user === null ? <button className="btn-signIn"><NavLink to="/login">登録/ログイン</NavLink></button> :
                <>
                    <div className="dropdown-acc">
                        <NavLink className="dropbtn-acc" to="/service">{user.name}<BiChevronDown className="icon-dropdown-acc" /></NavLink>
                        <div class="menu-account-dropdown">
                            <div className="dropdown-list-acc">
                                <div class="menu-account-dropdown-item-top">
                                    <NavLink to="/order" title="Fast-Delivery EXPRESS">
                                        <div className='menu-flex'>
                                            <BsPencilSquare className="icon-menu-acc" />
                                            <span>注文を作成</span>
                                        </div>
                                    </NavLink>
                                </div>
                                <div class="menu-account-dropdown-item" onClick={userLogOut}>
                                    <NavLink to="/" title="Fast-Delivery EXPRESS">
                                        <div className='menu-flex'>
                                            <BsFillForwardFill className="icon-menu-acc" />
                                            <span>ログアウト</span>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            }

            {/* +++User++++ */}

        </nav>
    );
}
export default NavBar;