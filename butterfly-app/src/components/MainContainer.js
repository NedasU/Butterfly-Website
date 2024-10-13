import React, { Children } from "react";
import Header from "./Header";
import TitleContainer from "./TitleContainer"
import ContentDiv from "./ContentDiv";
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