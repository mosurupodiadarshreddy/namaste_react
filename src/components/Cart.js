import { useSelector } from "react-redux";
import Restaurantcard from "./Restaurantcard.js";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice.js";

const Cart = () => {

    const cartitems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        //dispatch an action to clear chart 
        dispatch(clearCart());
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            {/* Header Section */}
            <div className="max-w-7xl mx-auto mb-8">
                <h1 className="text-4xl font-extrabold text-gray-800">
                    🛒 Shopping Cart
                </h1>

                <p className="text-gray-600 mt-2 text-lg">
                    Total Items:{" "}
                    <span className="font-bold text-orange-600">
                        {cartitems.length}
                    </span>
                </p>

                <button
                    onClick={handleClearCart}
                    className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
                    >
                    🗑️ Clear Cart
                </button>            
</div>

            {/* Empty Cart */}
            {
                cartitems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center mt-20">
                        <h2 className="text-3xl font-bold text-gray-500">
                            🛒 Your Cart is Empty
                        </h2>

                        <p className="text-gray-400 mt-2">
                            Add some products to see them here.
                        </p>
                    </div>
                ) : (

                    /* Cart Items Grid */
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                        {
                            cartitems.map((item) => (
                                <Restaurantcard
                                    key={item.id}
                                    restaurantdata={item}
                                />
                            ))
                        }

                    </div>
                )
            }

        </div>
    );
};

export default Cart;