import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Restaurantcard = ({ restaurantdata }) => {
  console.log(restaurantdata);

  const {id, title, price, rating, brand, category, thumbnail } =
    restaurantdata || {};

  const dispatch = useDispatch();

    const handleAddItem = (restaurantdata) => {
      dispatch(addItem(restaurantdata));
    };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 p-4">  

      <img
        className="restaurantcard-logo w-full h-52 object-cover rounded-xl"
        src={thumbnail}
      />

      <h3 className="mt-4 text-lg font-bold text-gray-800 truncate">
        {title}
      </h3>

      <h5 className="mt-2 text-sm text-gray-600">
        <span className="font-semibold text-gray-800">Brand :</span> {brand}
      </h5>

      <h5 className="mt-1 text-sm text-gray-600 capitalize">
        <span className="font-semibold text-gray-800">Category :</span> {category}
      </h5>

      <h5 className="mt-3 inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
        ⭐ {rating}
      </h5>

      <h5 className="mt-3 flex justify-between items-center text-lg font-bold text-orange-600">
        ₹ {price}
      

        <button className=" bg-orange-500 hover:bg-orange-600 text-white font-semibold font-extralight py-1 px-2 rounded-full" onClick={() => {handleAddItem(restaurantdata)}}>
         Add To Cart 🛒
        </button>
      
      </h5>
      
</div>
  );
};

// Higher Order Component (HOC)
// Takes Restaurantcard component as input
export const withOfferlabel = (Restaurantcard) => {
  
  // Returns a NEW component
  // props = all props passed to enhanced component
  return (props) => {

    // JSX returned by new enhanced component
    return (
      <div>

        {/* Extra UI added by HOC */}
        <label className="absolute bg-orange-200 p-2 m-2 rounded-lg">
          🎉 Offer
        </label>

        {/* Original component rendering */}
        {/* {...props} passes all props to original component */}
        <Restaurantcard {...props} />

      </div>
    )
  }
}

export default Restaurantcard;