import React from "react";
import NavBar from '../main/header';

const MainLayout =({children}) =>{
    return(
        <>
            <NavBar/>
            <main>{children}</main>
        </>
    )
}

export default MainLayout;
