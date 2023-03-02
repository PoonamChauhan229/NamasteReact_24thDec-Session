import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError()
    console.log(err)
    return(
        <>
        <h1>Error</h1>
        <h4>{err.status} : {err.statusText}</h4>
        </>
    )
}
export default Error;