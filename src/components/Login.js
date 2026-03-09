import React from "react";
import ReactDOM from "react-dom/client";

const Login = () => {
    return (
        <div className="loginform">
            <label>Username : </label>
            <input type="text" id="username"></input> 
            <label>Password : </label>
            <input type="text" id="password"></input>

            <button onClick={submitlogin}>Submit</button>
        </div>
    )
    function submitlogin() {
        return (
            <div>
                hi
            </div>
        )
    }
}

export default Login;