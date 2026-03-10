import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Restaurantcard from "./Restaurantcard";
import "./Body.css";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    //when ever state variable updates react triggers reconciliation cycle(rerenders the compoennt) 
    const [ListofRestros,setListofRestros] = useState([]);
    const [filteredRestros,setFilteredRestros] = useState([]);
    const [searchText,setSearchText] = useState("");
    // const [allrestros,setAllrestros] = useState([]);
    const SWIGGY_API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0358&lng=77.5970&page_type=DESKTOP_WEB_LISTING";

    useEffect(() => {
        console.log("useeffect called");
        fetchData();
    },[]);

    const fetchData = async () => {
        try{
            const data = await fetch(SWIGGY_API);
            const json =await data.json();
            //chatgpt logic not written by own to get list from that API response 
            const restrodata = json?.data?.cards?.find(
            (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setListofRestros(restrodata);
            setFilteredRestros(restrodata);
        }
        catch(error)
        {
            console.log(error);
        }  
    }  

    //this is what conditional rendering 
    // if(ListofRestros.length === 0){
    //     return <Shimmer/>;
    // }

    //turnery operator conditional rendering
    return ListofRestros.length === 0 ? <Shimmer/> : (
    <div className="body">
        
        <div className="button-container">
            <button onClick={
                function(){
                   const filteredlist =  allrestros.filter(item => item.avgRating>4.2);
                   console.log(filteredlist);
                   setListofRestros(filteredlist);
                }
            }> Top Restro's</button>
            <div className="search-bar">
                <input type="text" placeholder="search 🔍" className="searchbox" value={searchText} 
                onChange={(e) => {setSearchText(e.target.value)}}></input>
                <button className="search-button" onClick={() => {
                    const searchedList = ListofRestros.filter(
                        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestros(searchedList);
                }}>Search</button>
            </div>
        </div>
        <div className="res-cards-container">
            {
              filteredRestros.map(
                function(restrodata){
                  return <Restaurantcard key={restrodata.info.id} restaurantdata={restrodata}/>;
                }
              )
            }
        </div>
    </div>
    )
}

export default Body;