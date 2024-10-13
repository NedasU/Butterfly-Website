import React from "react";
import MainContainer from "../components/MainContainer";
import Container from "../components/Container";
import RequestDiv from "../components/RequestDiv";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import "../styles/styles.css"

export default function RequestPage(){
    return (
        <Container>
                <MainContainer>
                    <RequestDiv/>
                </MainContainer>
        </Container>
    );
}