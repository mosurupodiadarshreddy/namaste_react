import React from "react";
import { useState, useEffect } from "react";
import Restaurantcard from "./Restaurantcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [ListofRestros, setListofRestros] = useState([]);
  const [filteredRestros, setFilteredRestros] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allrestros, setAllrestros] = useState([]);

  useEffect(() => {
    console.log("useeffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products/category/kitchen-accessories");
      // const data = await fetch("https://dummyjson.com/products/category/groceries");
      // const data = await fetch("https://dummyjson.com/products/category/smartphones?limit=50");

      const json = await data.json();

      const restrodata = json?.products || [];

      setListofRestros(restrodata);
      setFilteredRestros(restrodata);
      setAllrestros(restrodata);
    } catch (error) {
      console.log(error);
    }
  };

 const onlineStatus = useOnlineStatus();

 if(onlineStatus === false){
  return (
    <div>
       🔴 Sorry Dude you are offline 😲 !! Please connect to the internet 😀
    </div>
  )
 }

  return ListofRestros.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="button-container">
        <button
          onClick={function () {
            const filteredlist = allrestros.filter(
              (item) => item.rating > 4.2
            );
            setFilteredRestros(filteredlist);
          }}
        >
          Top Restro's
        </button>

        <button
          onClick={function () {
            setFilteredRestros(allrestros);
          }}
        >
          🔄️ Refresh
        </button>

        <div className="search-bar">
          <input
            type="text"
            placeholder="search 🔍"
            className="searchbox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>

          <button
            className="search-button"
            onClick={() => {
              const searchedList = allrestros.filter((res) =>
                res.title.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestros(searchedList);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="res-cards-container">
        {filteredRestros.map(function (restrodata) {
        return (
          <Link key={restrodata.id} to={"/restaurants/" + restrodata.id}>
            <Restaurantcard
              restaurantdata={restrodata}
            />
          
           </Link>
        )})}
      </div>
    </div>
  );
};

export default Body;