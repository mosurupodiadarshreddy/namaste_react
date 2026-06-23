import React, { useContext } from "react";
import { useState, useEffect } from "react";
//Restaurantcard → default export, withOfferlabel → named export
import Restaurantcard,{withOfferlabel} from "./Restaurantcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext.js";

const Body = () => {
  const [ListofRestros, setListofRestros] = useState([]);
  const [filteredRestros, setFilteredRestros] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allrestros, setAllrestros] = useState([]);

  const OfferRestaurantCard = withOfferlabel(Restaurantcard);

  const {user, setUsername} = useContext(UserContext);

  useEffect(() => {
    console.log("useeffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products");

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
      <div className="sticky top-0 z-10 bg-white shadow-md px-6 py-4 flex flex-col md:flex-row md:items-center gap-4">
        <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-md hover:scale-105 hover:shadow-xl transition duration-300"
          onClick={function () {
            const filteredlist = allrestros.filter(
              (item) => item.rating > 4.2
            );
            setFilteredRestros(filteredlist);
          }}
        >
          Top Products
        </button>

        <div>
          <label>
            Username : 
            <input className="border border-black" 
            value={user}
            onChange={ (e) => 
              setUsername(e.target.value)
            } />
          </label>
        </div>

        <button  className="px-5 py-2 rounded-xl border border-gray-300 bg-white text-gray-700 font-medium shadow-sm hover:bg-gray-100 hover:scale-105 transition duration-300"
          onClick={function () {
            setFilteredRestros(allrestros);
          }}
        >
          🔄️ Refresh
        </button>

        <div className="flex items-center h-[40px] bg-gray-100 rounded-xl overflow-hidden border border-gray-300 shadow-sm ml-auto">
          <input
            type="text"
            placeholder="search 🔍"
            className="px-4 h-full w-64 bg-transparent outline-none text-gray-700"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>

          <button
              className="h-full px-6 border-l border-orange-700 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:opacity-90 transition duration-300"           
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

        <div>
           <button className="bg-lime-950 px-4 py-2 rounded-full text-white font-semibold hover:bg-lime-900">
            Cart 🛒
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6 py-6">
        {filteredRestros.map(function (restrodata) {
        return (
          <Link key={restrodata.id} to={"/restaurants/" + restrodata.id}>

            {
              restrodata.discountPercentage > 10 ? <OfferRestaurantCard restaurantdata={restrodata}/> : 
              <Restaurantcard restaurantdata={restrodata}/>
            }
           </Link>
        )})}
      </div>
    </div>
  );
};

export default Body;