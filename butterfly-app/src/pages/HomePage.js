import React, { useContext } from "react";
import Container from "../components/Container"
import MainContainer from "../components/MainContainer";
import TitleContainer from "../components/TitleContainer";
import ContentDiv from "../components/ContentDiv";
import { ProductContext } from "../ContextHooks/ProductContext";

export default function HomePage(){
    const products = useContext(ProductContext);
    const filtered_products = products.filter(product => product.category === "butterfly");

    return (
        <Container>
            <MainContainer>
                <TitleContainer imgSrc="/images/photo-collage-2.png.png" title="Butterflies"/>
                <ContentDiv products={filtered_products}/>
            </MainContainer>
        </Container>
    );
}