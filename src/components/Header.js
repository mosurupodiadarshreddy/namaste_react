import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./Header.css";
import {HEADER_LOGO,HINDUPUR_LOGO} from "../utils/constants";
import link from "react-dom";

const Header = () => {
    // let btnName = "Login";
    const [btnName,setBtnName]= useState("login")
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
                    <li>About</li>
                    <li>contact</li>
                    <li>Email</li>
                    <li>Cart</li>
                    <li>Home</li>   
                </ul>
            </div>
        </div>
    )
}

export default Header;