import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 0 auto;
    box-sizing: border-box;
    display: block;
    margin-top: -5vh;
    height: auto; 
    padding: 250px 80px 0;
    background-size: contain;
`

const InfoGroup = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    padding-bottom: 25px;
    display: block;
`

const WelcomeHeader = styled.h1`
    font-size: 23px;
    line-height: 50px;
    color: #1F1F1F;
    margin-top: 0;
    margin-bottom: 10px;
    font-weight: 300;
    max-width: 1000px;
    padding-bottom: 70px;
`

const EmbededLink = styled.a`
    color: #142832 !important;
    font-weight: 400;
`

const AboutInfoComponent = () => (
	<Container>
		<InfoGroup>
            <WelcomeHeader>Originally from Japan, I've traveled the globe exploring different cultues, and meeting diverse groups of people. This transformation has made me become the very person I am today as I coast along the diverse trends that exist within our society.</WelcomeHeader>
            <WelcomeHeader>I love nurturing great ideas into beautiful, functional, and profitable digital products. For over 5 years I’ve had the pleasure to work with agencies, start-ups and other companies across the globe on a wide range of projects — from the mobile UI/UX for an restaurant reservation system, to App Store featured mobile apps. Most recently I have been making great strides in building my personal startup <EmbededLink href="https://veveusa.com">Veve</EmbededLink> with currently 15+ employees.</WelcomeHeader>
            <WelcomeHeader>In 2018, I explored the Hackathon scene in which I personally participated in 4 different hackathon's over the year exploring how each and every one interacts. With this knowledge I'm planning on introducing some of the concepts I learned into Texas State.</WelcomeHeader>
			<WelcomeHeader>Alongside design and being student, I like to spend my time travelling, taking photos, creating portraits to photograph, and jamming to EDM.</WelcomeHeader>
			<WelcomeHeader>Have a good one <span role="img">😘</span>. If you want to send me a <EmbededLink href="mailto:me@trujamal.com?subject=Hi%20Jamal!%20%E2%9C%8B">shout!</EmbededLink></WelcomeHeader>
		</InfoGroup>
	</Container>
)

export default AboutInfoComponent