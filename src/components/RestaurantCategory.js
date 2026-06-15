import React from "react";
import { useState, useEffect } from "react";
import Restaurantcard from "./Restaurantcard";

const RestaurantCategory = (title) => {

    // state variable for accordion open/close
    // false = closed
    // true = opened
    const [showItems, setShowItems] = useState(false);
    const [categoryProducts, setCategoryProducts] = useState([]);


    // fetch category products dynamically
    const fetchCategoryProducts = async () => {

        // dynamic api using category title
        const data = await fetch("https://dummyjson.com/products/category/" + title.title);

        // converting response to json
        const json = await data.json();
        console.log(json);

        // storing fetched products in state
        setCategoryProducts(json.products);
        console.log(categoryProducts);
    }

    return(

        // accordion container
        <div className="bg-white shadow-lg p-4 rounded-xl mb-4 cursor-pointer">

            {/* header section */}
            <div className="flex justify-between items-center">

                {/* category title */}
                <h1 className="text-lg font-bold text-gray-800">
                  More Items on : {title.title} 
                  {console.log(categoryProducts.length)}
                </h1>

                {/* accordion toggle button */}
                <span className="text-xl">

                <button onClick={() => {

                    // toggles accordion state
                    // false -> true
                    // true -> false
                    setShowItems(!showItems);

                    fetchCategoryProducts();

                    }}>⬇️ 
                </button>

                </span>

            </div>

            {/* conditional rendering */}
            {/* content shown only when showItems becomes true */}
            {
                showItems && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">

                    {
                        categoryProducts.map((product) => (

                        <Restaurantcard
                        key={product.id}
                        restaurantdata={product}
                        />

                        ))
                    }

                </div>
                )
            }

        </div>
    )
}

export default RestaurantCategory;