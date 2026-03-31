import React from "react";
import "./Restaurantcard.css";
import { Link } from "react-router-dom";

const Restaurantcard = ({ restaurantdata }) => {
  console.log(restaurantdata);

  const {id, title, price, rating, brand, category, thumbnail } =
    restaurantdata || {};

  return (
    <div className="restaurant-card">
      <img className="restaurantcard-logo" src={thumbnail} />

      <h3>Name : {title}</h3>
      <h5>Brand : {brand}</h5>
      <h5>Category : {category}</h5>
      <h5>Rating : {rating} ⭐</h5>
      <h5>Price : ₹ {price}</h5>

      {/* <Link to={"/restaurants/" + id}>Menu</Link> */}
    </div>
  );
};

export default Restaurantcard;