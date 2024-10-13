import React from "react";
import Header from "./Header";
import TitleContainer from "./TitleContainer"
import ContentDiv from "./ContentDiv";
import Footer from "./Footer";

const MainContainer = ()=> {
    return (
        <div className="main-container">
            <Header/>
            <TitleContainer/>
            <ContentDiv/>
            <Footer/>
        </div>
    );
}

export default MainContainer;