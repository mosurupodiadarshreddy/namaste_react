import React from "react";
// import User from "./User.js"
import Userclass from "./Userclass.js";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent constructor");
    }

    componentDidMount (){
    console.log(" parent  did mount");
    }

    render(){
        console.log("parent render");
        return(
        <div>
        <Userclass name={"adarsh reddy child 1 "}/>
                {/* <Userclass name={"adarsh reddy child 2 "}/> */}

        </div>
        )
    }
}

export default About;