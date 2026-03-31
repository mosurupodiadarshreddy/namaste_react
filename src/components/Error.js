import { useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError()

    return (
        <div>

            Oops ! something went wrong .... 
            <br/>
            {error.status} {error.statusText}
        </div>
    )
}
export default Error;