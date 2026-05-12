import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {HEADER_LOGO,HINDUPUR_LOGO} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    // let btnName = "Login";
    const [btnName,setBtnName]= useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex items-center justify-between bg-black px-6 py-3 shadow-lg rounded-lg">
            {/* <div className="logo-container">
                <img className="logo" src={HEADER_LOGO}/>
            </div> */}
            {/* <div className="heading">
                <h1>Products</h1>
            </div> */}
            <div className="hindupur-logo">
                <img className="w-56" src={HINDUPUR_LOGO}/>
            </div>
            <div className="nav-items">
                <ul className="flex items-center gap-8 text-white font-semibold">
                   <button className="loginbutton" onClick={()=> {
                    btnName === "Login" ?
                        setBtnName("Logout") : setBtnName("Login");
                   }}>{btnName}</button>
                    <li className="hover:text-yellow-300 transition-colors duration-200 cursor-pointer"> Online Status : {onlineStatus ? "🟢" : "🔴" }</li>
                    <li className="hover:text-yellow-300"><Link to="/about"> About </Link></li>
                    <li className="hover:text-yellow-300"><Link to="/contact">Contactus</Link></li>
                    <li className="hover:text-yellow-300"><Link to="/email">Email</Link></li>
                    <li className="hover:text-yellow-300"><Link to="/cart">Cart</Link></li>
                    <li className="hover:text-yellow-300"><Link to="/grocery"> Grocery </Link></li>
                    <li className="hover:text-yellow-300"><Link to="/"> Home </Link></li>   
                </ul>
            </div>
        </div>
    )
}

export default Header;