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
    background: url('//cl.ly/f4f37efc4e0f/faisal-latif-713461-unsplash.jpg') center center fixed no-repeat;
`

const InfoGroup = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    padding-bottom: 25px;
    display: block;
`

const WelcomeText = styled.p`
    margin-bottom: 24px;
    color: #FFFFFF;
    line-height: 16px;
    display: inline-block;
    font-size: 12px;
    letter-spacing: .2px;
`

const WelcomeHeader = styled.h1`
    font-size: 40px;
    line-height: 40px;
    color: #FFFFFF;
    margin: 0 0 24px;
    font-weight: 700;
    max-width: 690px;
`

const WelcomeBody = styled.p`
	padding-bottom: 30px;
    max-width: 486px;
    font-size: 16px;
    color: #FFFFFF;

`

const EmbededLink = styled.a`
    color: #E6EDF1 !important;
`

const AboutInfoComponent = () => (
	<Container>
		<InfoGroup>
			<WelcomeText>Hello there</WelcomeText>
			<WelcomeHeader>I'm the co-founder of the startup Veve, specialising in development for web, mobile and design products.</WelcomeHeader>
			<WelcomeBody>I love nurturing great ideas into beautiful, functional, profitable digital products. For over 5 years I’ve had the pleasure to work with agencies, start-ups and other companies across the globe on a wide range of projects — from the mobile UI/UX for an restaurant reservation system, to App Store featured mobile apps. Most recently I have been making great strides in building my personal startup <EmbededLink href="https://veveusa.com">Veve</EmbededLink> with currently 15+ employees.</WelcomeBody>
			<WelcomeBody>In 2018, I explored the Hackathon scene in which I personally participated in 4 different hackathon's over the year exploring how each and every one interacts. With this knowledge I'm planning on introducing some of the concepts I learned into Texas State.</WelcomeBody>
			<WelcomeBody>Alongside design and being student, I like to spend my time travelling, taking photos, creating portraits to photograph, jamming to EDM.</WelcomeBody>
			<WelcomeBody>I also go for detail.</WelcomeBody>
		</InfoGroup>
	</Container>
)

export default AboutInfoComponent