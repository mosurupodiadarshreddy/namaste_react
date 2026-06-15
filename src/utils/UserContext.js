import { createContext } from "react";

const UserContext = createContext({
    user :  "Adarsh Reddy",
    email : "adarshreddy713@gmail.com",
    phone : "9100244598",
    role : "Admin"
});

export default UserContext;