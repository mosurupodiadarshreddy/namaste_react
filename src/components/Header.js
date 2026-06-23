import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {HEADER_LOGO,HINDUPUR_LOGO} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
    // let btnName = "Login";
    const [btnName,setBtnName]= useState("Login");

    const onlineStatus = useOnlineStatus();

    const {user,role} = useContext(UserContext);

    //subscribing to store by useSelector
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex items-center justify-between bg-black px-6 py-3 shadow-lg">
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
                   
                    <li className="hover:text-yellow-300 transition-colors duration-200 cursor-pointer"> Online Status : {onlineStatus ? "🟢" : "🔴" }</li>
                    <li className="hover:text-yellow-300"><Link to="/about"> About </Link></li>
                    {/* <li className="hover:text-yellow-300"><Link to="/contact">Contactus</Link></li> */}
                    {/* <li className="hover:text-yellow-300"><Link to="/email">Email</Link></li> */}
                    {/* <li className="hover:text-yellow-300"><Link to="/cart">Cart</Link></li> */}
                    {/* <li className="hover:text-yellow-300"><Link to="/grocery"> Grocery </Link></li> */}
                    <li className="hover:text-yellow-300"><Link to="/cart"> Cart {cartItems.length} Items</Link></li>
                    <li className="hover:text-yellow-300"><Link to="/"> Home </Link></li>   
                    <li className="hover:text-yellow-300"><Link to="/"> User : {user} </Link></li>

                    {console.log("User : " + user)}

                    <button className="bg-gray-600 text-red-500 px-4 py-2 rounded-md border border-red-500 hover:bg-red-500 hover:text-white transition" onClick={()=> {
                        btnName === "Login" ?
                        setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>

                </ul>

                
            </div>
        </div>
    )
}

export default Header;