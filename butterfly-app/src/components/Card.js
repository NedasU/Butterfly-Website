import React from "react";

const Card = ({ imageSrc, title, description, price }) => {
    console.log(title + " " + imageSrc);
    return (
        <div className="card">
            <div className="img-container">
                <img className="card-image" src={imageSrc} alt="butterfly image" />
            </div>
            <div className="card-info">
                <h3 className="card-subtitle">{title}</h3>
                <p className="card-description">{description}</p>
                <h4 className="card-price">${price}</h4>
            </div>
        </div>
    );
}

export default Card;