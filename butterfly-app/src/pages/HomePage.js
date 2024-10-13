import React, { createContext, useEffect, useState } from "react";
import Container from "../components/Container"
import MainContainer from "../components/MainContainer";
import fetchData from "../data-getter";

export const ProductContext = createContext();

export default function HomePage(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // This is where it must make the API call to fetch data
        const data = fetchData();
        setProducts(data);
    }, []);

    return (
        <ProductContext.Provider value={products}>
            <Container>
                <MainContainer/>
            </Container>
        </ProductContext.Provider>
    );
}