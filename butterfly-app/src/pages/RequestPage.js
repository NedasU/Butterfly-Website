import React from "react";
import MainContainer from "../components/MainContainer";
import Container from "../components/Container";
import RequestDiv from "../components/RequestDiv";

export default function RequestPage(){
    return (
        <Container>
                <MainContainer>
                    <RequestDiv/>
                </MainContainer>
        </Container>
    );
}