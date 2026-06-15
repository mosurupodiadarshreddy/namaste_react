import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Cart from "./components/Cart.js";
import Body from "./components/Body.js";
import Login from "./components/Login.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import About from "./components/About.js";
import Contactus from "./components/Contactus.js";
import Error from "./components/Error.js"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer.js";
import "../index.css";
import UserContext from "./utils/UserContext.js";
import appStore from "./utils/appStore.js";
import { Provider } from "react-redux";

//chunking 
//code splitting 
//dynamic bundling
//lazy loading 
//on demand loading 
//on import loading

const Grocery = lazy(() => import("./components/Grocery.js"));

const Applayout = () => {

    const [username,setUsername] = useState();

    useEffect( () => {
        const data = {
        name : "Adarsh M"
        }
        setUsername(data.name);
    },[])

    return (
    <Provider store={appStore}>
    <UserContext.Provider value={{user:username, setUsername}}>
        <div className="app">
            <Header/>
            <Outlet/>
            {/* <Footer/> */}
        </div>
    </UserContext.Provider>
    </Provider>
    )
};

const appRouter = createBrowserRouter([
    {
    path: "/",
    element: <Applayout/>,
        children : [
            {
            path: "/",
            element: <Body/>,
            errorElement: <Error/>
            },
            {
            path: "/about",
            element: <About/>,
            errorElement: <Error/>
            },
            {
            path: "/grocery",
            element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>,
            errorElement: <Error/>
            },
            {
            path: "/contact",
            element: <Contactus/>
            },
            {
            path: "/restaurants/:id",
            element: <RestaurantMenu/>
            },
            {
            path: "/cart",
            element: <Cart/>
            }
        ],
    errorElement: <Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />);