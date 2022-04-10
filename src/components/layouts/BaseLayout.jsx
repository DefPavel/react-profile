import React from "react";
import Header from "../main/Header";

const BaseLayout =({children}) =>{
    return(
        <>
            <Header/>
            <main>{children}</main>
        </>
    )
}

export default BaseLayout;
