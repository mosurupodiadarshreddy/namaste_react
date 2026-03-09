import React from "react";
import ReactDOM from "react-dom/client";
import "./Header.css";
import {HEADER_LOGO,HINDUPUR_LOGO} from "../utils/constants";
import link from "react-dom";

const Header = () => {
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
                   <a link="https://en.wikipedia.org/wiki/Hindupur_railway_station">
                   <li>Home</li></a>
                    <li>About</li>
                    <li>contact</li>
                    <li>Email</li>
                    <li>Cart</li>   
                </ul>
            </div>
        </div>
    )
}

export default Header;