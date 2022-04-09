import React from "react";
import NavBar from '../main/NavBar';

const BaseLayout =({children}) =>{
    return(
        <>
            <NavBar/>
            <main>{children}</main>
        </>
    )
}

export default BaseLayout;
