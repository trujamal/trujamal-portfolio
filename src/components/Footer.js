import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
	background: #1A1B1C;
    padding: 50px 0;
    grid-gap: 20px;
    height: 100vh;
    margin: 0 auto;
`

const Text = styled.p`
	font-size: 24px;
	font-weight: 600;
	color: #F5FFFF;
	max-width: 500px;
	margin: 0 auto;
`
const Saying = styled.div`


`

const SayingHello = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700');	font-size: 28px;
    font-weight: 700;
    color: #F5FFFF;
    font-size: 32px;
    font-family: 'Lato', sans-serif;
`

const SayingHelloSubText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700');    font-size: 28px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #757B7F;
    margin-top: 0px;
`

const LinkGroup = styled.div`
	width: 500px;
	margin 50px auto;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 10px;
    color: #F5FFFF;

    a{
        transition: 0.8s;
        color: #F5FFFF;
    }

    a:hover {
        cursor: pointer;
        color: #8AB9CD;
    }
`
const Copyright = styled.div`
    color: #F5FFFF;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;

    a{
        color: #F5FFFF;
        transition: 0.8s;
    }

    a:hover {
        cursor: pointer;
        color: #FFFFFF;
        transform: translateY(-3px);
    }

`

const Footer = ({data, children}) => (
        <FooterGroup>
            <Saying>
                <SayingHello>
                Say Hello 🤙
                </SayingHello>
                <SayingHelloSubText>For work enquires head over to Veve.</SayingHelloSubText>
            </Saying>
        	<LinkGroup>
				{data.allContentfulLink.edges.map(edge => (
				          <a href={edge.node.url}>{edge.node.title}</a>
				          ))}
        	</LinkGroup>
            <Copyright>
                {children}
            </Copyright>
        </FooterGroup>
)
        
        
export default Footer

