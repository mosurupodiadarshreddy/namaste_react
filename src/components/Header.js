import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./Header.css";
import {HEADER_LOGO,HINDUPUR_LOGO} from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    // let btnName = "Login";
    const [btnName,setBtnName]= useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={HEADER_LOGO}/>
            </div>
            <div className="heading">
                <h1>Hindupur Restaurants</h1>
            </div>
            <div className="hindupur-logo">
                <img className="hindupur-img-logo" src={HINDUPUR_LOGO}/>
            </div>
            <div className="nav-items">
                <ul>
                   <button className="loginbutton" onClick={()=> {
                    btnName === "Login" ?
                        setBtnName("Logout") : setBtnName("Login");
                   }}>{btnName}</button>
                    <li><Link to="/about"> About </Link></li>
                    <li><Link to="/contact">Contactus</Link></li>
                    <li><Link to="/email">Email</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/"> Home </Link></li>   
                </ul>
            </div>
        </div>
    )
}

export default Header;