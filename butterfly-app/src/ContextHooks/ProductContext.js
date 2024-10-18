import React, { useState, useEffect, createContext } from "react";
import fetchData from "../data-getter";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Simulating data gathering through API to the backend
        const data = fetchData();
        setProducts(data);
    }, []);

    console.log("Products:", products);

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};