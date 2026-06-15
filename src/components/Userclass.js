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

    return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
    
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 w-full max-w-md text-center hover:scale-105 transition duration-300">
      
      <img
        src={avatar_url}
        alt={name}
        className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-orange-400 shadow-lg"
      />

      <h1 className="mt-6 text-3xl font-extrabold text-gray-800">
        {name}
      </h1>

      <h2 className="mt-2 text-lg text-gray-600">
        📍 {location}
      </h2>

      <h3 className="mt-4 text-gray-700 font-medium">
        📞 9100244598
      </h3>

      <div className="mt-6 flex justify-center gap-4">
        
        <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-md hover:scale-105 transition duration-300">
          Follow
        </button>

        <button className="px-5 py-2 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition duration-300">
          Message
        </button>
      </div>

      {/* <h1>Count : {count}</h1>
      <h1>Count1 : {count1}</h1>
      <button
        onClick={() => {
          this.setState({
            count: this.state.count + 1,
          });
        }}
      >
        count
      </button> */}
    </div>
  </div>
);
}

}

export default Userclass;