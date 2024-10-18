import React from "react";
import Card from "./Card"

const ContentDiv = ({products}) => {

    return (
        <div className="content-div">
            {products.map((product) => (
                <Card key={product.id} {...product}/> // Also passes the category property but is ignored.
            ))}
        </div>
    );
}


export default ContentDiv;