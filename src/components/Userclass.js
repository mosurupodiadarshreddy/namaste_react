import React from "react";

class Userclass extends React.Component{

constructor(props){
    super(props);

    this.state = {
        count : 0,
        count1 : 0,
        userInfo : {}
    };
    console.log(this.props.name + "child constructor");

}

async componentDidMount (){
const data = await fetch("https://api.github.com/users/mosurupodiadarshreddy");
let json = await data.json();

console.log(json);
            this.setState({
                    userInfo : json
            })
    console.log(this.props.name + " child did mount");
}

componentWillUnmount(){
    console.log("component will unmount");
}

render(){
    const { name , location, avatar_url} = this.state.userInfo || {};
    // const {count,count1} = this.state;
    console.log(this.props.name + "child render");

    return(
        <div className="usercard">
            <h1> Name : {name}</h1>
            <h2>Location : {location}</h2>
            <h3>Contact : 9100244598</h3>

            <img src={avatar_url}></img>
              {/* <h1>Count : {count}</h1>
            <h1>Count1 : {count1}</h1>
            <button onClick={()=>{
                //dont update state varibales directly
                this.setState({
                    count : this.state.count + 1,
                })
            }}>count</button> */}

          
        </div>
    )
}

}

export default Userclass;