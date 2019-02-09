import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
	background: #F1F3F5;
	padding: 50px 0;
	display: grid;
	grid-gap: 20px;
`

const Text = styled.p`
	font-size: 24px;
	font-weight: 600;
	color: #142832;
	max-width: 500px;
	margin: 0 auto;
`

const SecondaryText = styled.p`
	font-size: 28px;
	margin: 0 auto;

`

const Button = styled.button`
	font-size: 24px;
    color: white;
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    justify-self: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
        box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
        transform: translateY(-3px);
    }
`

const LinkGroup = styled.div`
	width: 500px;
	margin 50px auto;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 10px;

    a{
        transition: 0.8s;
    }

    a:hover {
        cursor: pointer;
        color: black;
    }
`
const Copyright = styled.div`
    color: #1F1F1F;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
`


const Footer = ({data, children}) => (
        <FooterGroup>
        	<Text>
        	Founder and pusher of pixels at Veve, offically launching 2019.
        	</Text>
        	<SecondaryText>
			Say Hello 🤙
        	</SecondaryText>
        	<Text>For work enquires head over to Veve.</Text>
        	<Button>Medium</Button>
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

