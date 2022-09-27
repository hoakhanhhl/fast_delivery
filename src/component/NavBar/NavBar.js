import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import useDarkMode from '../../useDarkMode';
// import Tippy from 'tippy.js';
// import Service from '../Service/Service';
const NavBar = () => {
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    return (
        <nav className="flex items-center md:px-20">
            <div className="flex items-center">
                <NavLink to="/" itemprop="url" title="GHN - Giao Hàng Nhanh Toàn Quốc">
                    <img itemprop="logo" src="//theme.hstatic.net/200000472237/1000829412/14/logo.png?v=481" alt="GHN - Giao Hàng Nhanh Toàn Quốc" class="logoimg" />
                </NavLink>
                {isDarkMode ? (
                    <BsSunFill size={"24px"} color="#e9c46a" className="cursor-pointer" onClick={() => toggleDarkMode(!isDarkMode)} />
                ) : (
                    <FaMoon size={"24px"} color="#e9c46a" className="cursor-pointer" onClick={() => toggleDarkMode(!isDarkMode)} />
                )}
            </div>

            <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold">
                <li className="btn-hover"><NavLink to="/">Home</NavLink></li>
                <li className="btn-hover"><NavLink to="/Introduce">Introduce</NavLink></li>
                <li className="btn-hover"><NavLink to="/Search">Search</NavLink></li>
                <li class="dropdown">
                    <NavLink class="dropbtn" to="/Service">Service</NavLink>

                    <div class="dropdown-content">
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                    </div>
                </li>
                <li className="btn-hover"><NavLink to="/Policy">Policy</NavLink></li>
                <button className="btn-signIn"><NavLink to="/SignIn">Đăng ký/ Đăng nhập</NavLink></button>

            </ul>
        </nav>
    );
}
export default NavBar;