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
    font-weight: 900;
    line-height: 40px;
`

const AboutText = styled.p`
    color: #757B80;
    margin: 0;
    padding-bottom: 75px;
`



const AboutOther = () => (
    <Container>
        <ContainerGroup>
            <TextWrapper>
                <AboutHeader>Brand Experience.</AboutHeader>
                <AboutText>Bestbuy, Veve, Lookin Good, Brix + Brine, Commuter, Ailez, Agape Bengals, American Airlines, TRW, Clicktogether, Experian, Whitbread and many more.</AboutText>
            </TextWrapper>
            <TextWrapper>
                <AboutHeader>Core Skillset.</AboutHeader>
                <AboutText>Art Direction, Illustration, Mobile App Design, Mobile Development, Web App Design, Animation, Photography, Cinematography, Full-Stack Development, and Music Production.</AboutText>
            </TextWrapper>
            <TextWrapper>
                <AboutHeader>Values.</AboutHeader>
                <AboutText>Good design is good business. It’s not only about beauty, it has to work. Never not learning. There’s always something new to learn.Get to the root of the problem. To come up with the best solution. Keep it simple. Why make it complicated?</AboutText>
            </TextWrapper>
            <TextWrapper>
                <AboutHeader>Languages.</AboutHeader>
                <AboutText>Swift, Objective-C, Javascript ES6, React, Gatsby, Vue, SASS, x86 Assembly, C, C++, Java, and Python.</AboutText>
            </TextWrapper>
        </ContainerGroup>
    </Container>
)

export default AboutOther