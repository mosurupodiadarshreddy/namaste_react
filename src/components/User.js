// import { useState } from "react";

// const User = (props) => {
// const [btnName,setBtnName] = useState("login");
// const [count,setCount] = useState(0);
// const [count1,setCount1] = useState(0);

//     return <div className="usercard">
//         <h1> Name : {props.name}</h1>
//         <h2>Location : Hindupur</h2>
//         <h3>Contact : 9100244598</h3>
//         <button className="loginbutton" onClick={()=> {
//                     btnName === "Login" ?
//                         setBtnName("Logout") : setBtnName("Login");
//                    }}>{btnName}</button>
//         <button onClick={() => 
//             setCount(count+1)
//         }>Countbutton</button>
//         <button onClick={()=>{
//             setCount1(count1+1)
//         }}>Count1button</button>
//         <h4>Count : {count}</h4>  
//         <h4>Count1 : {count1}</h4>         
//     </div>
// }
// export default User;