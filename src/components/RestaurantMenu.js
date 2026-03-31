import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://dummyjson.com/products/" + id
    );
    const json = await data.json();
    console.log(json);
    setMenuData(json);
  };

  if (!menuData) return <Shimmer/>;

  return (
    <div className="menu">
      <Link to="/"><button>Back</button></Link>
      <h1>{menuData.title}</h1>
      <h2>Category: {menuData.category}</h2>
      <img src={menuData.thumbnail} width="500" />
      <h3>Price: ₹ {menuData.price}</h3>
      <h3>Rating: ⭐ {menuData.rating}</h3>
      <h3>Brand: {menuData.brand}</h3>
      <h3>Description:</h3>
      <p>{menuData.description}</p>
    </div>
  );
};

export default RestaurantMenu;