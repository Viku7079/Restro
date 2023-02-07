import React from "react";
import { NavLink } from "react-router-dom";

function Error(){
    return(
        <>
        <h1>Page not Found</h1>
        <NavLink to="/login" >Go back Home</NavLink>
        </>
    )
}

export default Error;