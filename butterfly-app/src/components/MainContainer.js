import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainContainer = ({ children })=> {
    return (
        <div className="main-container">
            <Header/>
            { children }
            <Footer/>
        </div>
    );
}

export default MainContainer;