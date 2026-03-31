import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import Login from "./src/components/Login";
import RestaurantMenu from "./src/components/RestaurantMenu.js";
import About from "./src/components/About";
import Contactus from "./src/components/Contactus";
import Error from "./src/components/Error"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

const Applayout = () => {
    return (
    <div className="app">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
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
            path: "/contact",
            element: <Contactus/>
            },
            {
            path: "/restaurants/:id",
            element: <RestaurantMenu/>
            }
        ],
    errorElement: <Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />);