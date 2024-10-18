import React from "react";

export default function TitleContainer({imgSrc, title}){
    return (
        <div className="title-container">
            <img className="bg-image" src={imgSrc} alt="Background Image"/>
            <h2 className="title">{title}</h2>
        </div>
    );
}