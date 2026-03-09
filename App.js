import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import Login from "./src/components/Login";

const Applayout = () => {
    return (
    <div className="app">
        <Header/>
        <Body/>
        <Footer/>
        {/* <Login/> */}
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Applayout/>);