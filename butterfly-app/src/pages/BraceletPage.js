import React, {useContext} from "react";
import MainContainer from "../components/MainContainer";
import Container from "../components/Container";
import TitleContainer from "../components/TitleContainer";
import ContentDiv from "../components/ContentDiv";
import { ProductContext } from "../ContextHooks/ProductContext";


export default function BraceletPage(){

    const products = useContext(ProductContext);
    const filtered_products = products.filter(product => product.category === 'bracelet');

    return (
            <Container>
                <MainContainer>
                    <TitleContainer imgSrc="/images/bracelets/bracelet-background.png" title="Bracelets"/>
                    <ContentDiv products={filtered_products}/>
                </MainContainer>
            </Container>
    );
}