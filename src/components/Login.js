import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import "./Login.css";

const Login = () => {

    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [login,setLogin] = useState(false);


    function submitlogin() {

    console.log(name);
    console.log(password);

        if( name == "admin" && password == "admin" ){
            setLogin(true);
        }
         else{
            return ("invalid creds");
        }
         
    }

    if(login){
        return(
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        )
       
    }

    return (
        <div className="loginform">

            <label>Username : </label>
            <input type="text" id="username" value={name} onChange={(e)=> {setName(e.target.value)}}></input> 
            <label>Password : </label>
            <input type="text" id="password" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>

            <button onClick={submitlogin} id="submit-button">Submit</button>
        </div>
    )

   

}

export default Login;