import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useProductMenu from "../utils/useProductMenu";
import RestaurantCategory from "./RestaurantCategory.js";

const RestaurantMenu = () => {
  const { id } = useParams();
  
  //custom hook
  const menuData = useProductMenu(id);

 const categories = [
  {
    title: menuData?.category || "Unknown",
  },
];

console.log(categories);

return !menuData ? (
  <Shimmer />
) : (
  <div className="min-h-screen bg-gray-100 py-10 px-4">
    
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
      
      <Link to="/">
        <button className="m-6 px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-md hover:scale-105 transition duration-300">
          ← Back
        </button>
      </Link>

      <div className="grid md:grid-cols-2 gap-10 p-8 items-center">
        
        {/* Image */}
        <div>
          <img
            src={menuData.thumbnail}
            alt={menuData.title}
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Details */}
        <div className="space-y-4">
          
          <h1 className="text-4xl font-extrabold text-gray-800">
            {menuData.title}
          </h1>

          <h2 className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold capitalize">
            {menuData.category}
          </h2>

          <div className="flex items-center gap-4">
            
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
              ⭐ {menuData.rating}
            </span>

            <span className="text-3xl font-bold text-orange-600">
              ₹ {menuData.price}
            </span>
          </div>

          <h3 className="text-lg text-gray-700">
            <span className="font-bold text-gray-900">Brand:</span>{" "}
            {menuData.brand}
          </h3>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Description
            </h3>

            <p className="text-gray-600 leading-7">
              {menuData.description}
            </p>
          </div>
        </div>
      </div>
      <div className="p-2 m-2 rounded-lg">
        {
          categories.map((category, index) => (
          <RestaurantCategory
            key={index}
            title={category.title}
          />
          ))
        }
      </div>
    </div>
  </div>
);
};

export default RestaurantMenu;