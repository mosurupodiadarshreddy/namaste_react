import React from "react";
import ReactDOM from "react-dom/client";
import "./Restaurantcard.css";
import Menucard from "./Menucard";

/*
 const { name,avgRating,areaName,availability,imageUrl,cuisines } = resdata; //{resname,rating,time,price} destructuring concept
<h5>{cuisines.join(",")}</h5>  string concatenation by , 
<h5 className="price">status : {availability.opened ? "open" : "close"}</h5> // condition ? trueValue : falseValue
*/
const Restaurantcard = ({restaurantdata}) => {
    const baseurl = "https://media-assets.swiggy.com/swiggy/image/upload/"
    console.log(restaurantdata);
     const {isOpen,name,areaName,avgRating,cloudinaryImageId} = restaurantdata.info || {}; //{resname,rating,time,price} destructuring concept
    return (
        <div className="restaurant-card">
            <img className="restaurantcard-logo" src={baseurl+cloudinaryImageId} />
            <h3>Name : {name}</h3>
            {/* <h5>{cuisines.join(",")}</h5> */}
            <h5>Rating : {avgRating} ⭐</h5>
            <h5>Area : {areaName} </h5>
            <h5>Status : {isOpen ? "open 🟢" : "close 🔴"}</h5>
            <button onClick={menu}>Menu</button>
            {/* <h5 className="price">status : {availability?.opened ? "open" : "close"}</h5> */}
        </div>
    )

    function menu  (restaurantdata)  {
        return <Menucard restaurantdata={restaurantdata}/>
    }
}

export default Restaurantcard;