import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: white;
    padding: 120px 80px;
    z-index: 12;
    display: block;
`
const ContainerGroup = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 120px;
`
const TextWrapper = styled.div`
    float: left;
    margin-bottom: 0;
    margin-right: 5%;
    width: 45%;
`

const AboutHeader = styled.h1`
    font-size: 32px;
    line-height: 40px;
`

const AboutText = styled.p`
    color: #757B80;
    margin: 0;
`



const AboutOther = () => (
    <Container>
        <ContainerGroup>
            <TextWrapper>
                <AboutHeader>Brand Experience</AboutHeader>
                <AboutText>Accenture, Alstom, Amtico, Baxi, Detroit Electric, Jaguar Land Rover, Lloyds TSB, Massey Ferguson, NFU Mutual, Notarize, TNT, TRW, Walmart, WeChat, Whitbread and many more.</AboutText>
            </TextWrapper>
            <TextWrapper>
                <AboutHeader>Core Skillset</AboutHeader>
                <AboutText>Art Direction, Illustration, Mobile App Design, Web App Design, VR Design + Prototyping, 3D Modelling + Animation, Photography, Front-end Web Development.</AboutText>
            </TextWrapper>
        </ContainerGroup>
    </Container>
)

export default AboutOther