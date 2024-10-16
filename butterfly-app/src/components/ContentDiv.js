import React, { useContext } from "react";
import { ProductContext } from "../pages/HomePage";
import Card from "./Card"

const ContentDiv = () => {
    const products = useContext(ProductContext);

    return (
        <div className="content-div">
            {products.map((product) => (
                <Card key={product.id} {...product}/>
            ))}
        </div>
    );
}


export default ContentDiv;