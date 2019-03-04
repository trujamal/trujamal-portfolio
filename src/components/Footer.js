import React from 'react'
import styled from 'styled-components'
import Emoji from "../components/Emoji"

const FooterGroup = styled.div`
    background: #1a1b1c;
    color: #fff;
    height: 100vh;
    min-height: 480px;
    position: relative;
    clear: left;
`
const FooterContainer = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`


const Saying = styled.div`
    max-width: 486px;
    padding-bottom: 24px;
    display: block;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
`

const LinkGroup = styled.footer`
    @media (max-width: 1024px) {
        padding: 40px 0;
    }
    padding: 24px 0;
    width: 100%;
    display: block;
    clear: both;
    cursor: default;
    position: absolute;
    bottom: 0;
    z-index: 10;
    
`

const LinkGroupReference = styled.a`

    float: right;
    color: #fff;
    padding-right: 20px

    a:hover {
        background: url(images/top.svg) right 6px no-repeat
    }


    a, span, video, .img-wrap, img {
        transition: all 0.3s ease
    }

    a.top:hover:before {
        visibility: hidden;
    }   


`

const SayingHello = styled.a`
    @import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700');	
    font-weight: 700;
    font-size: 32px;
    font-family: 'Lato', sans-serif;
    font-size: 32px;
    line-height: 40px;
    font-weight: bold;
    margin-bottom: 16px;
    display: inline-block;
    cursor:grab;
    color: white !important;

    :first {
      color: white
    }

    a:hover {
        cursor:grabbing;
    }
}
`

const Sayingspan = styled.span`
  -webkit-animation-name: wiggle;
  -ms-animation-name: wiggle;
  -ms-animation-duration: 1000ms;
  -webkit-animation-duration: 1000ms;
  -webkit-animation-iteration-count: 1;
  -ms-animation-iteration-count: 1;
  -webkit-animation-timing-function: ease-in-out;
  -ms-animation-timing-function: ease-in-out;

@-webkit-keyframes wiggle {
  0% {-webkit-transform: rotate(0deg);}
  25% {-webkit-transform: rotate(-2deg);}
  50% {-webkit-transform: rotate(-5deg);}
  75% {-webkit-transform: rotate(-2deg);}
  100% {-webkit-transform: rotate(0deg);}
}

@-ms-keyframes wiggle {
  0% {-ms-transform: rotate(1deg);}
  25% {-ms-transform: rotate(-1deg);}
  50% {-ms-transform: rotate(1.5deg);}
  75% {-ms-transform: rotate(-5deg);}
  100% {-ms-transform: rotate(0deg);}
}

@keyframes wiggle {
  0% {transform: rotate(10deg);}
  25% {transform: rotate(-10deg);}
  50% {transform: rotate(20deg);}
  75% {transform: rotate(-5deg);}
  100% {transform: rotate(0deg);}
}


`

const SayingHelloSubText = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700');    font-size: 28px;
    font-family: 'Lato', sans-serif;
    cursor: default;}
    font-weight: 400;
    font-size: 18px;
    color: #757B7F;
    margin: 0;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    letter-spacing: -.2px;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;

`

const SayingHelloSubLink = styled.a`

    position: relative;
    color: #fff;
    transition: all 0.3s ease;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    color: white !important;

    .underbar{
      width: 0;
      height: 5px;
      background: rgba(100,100,200,0);
      //left: -50px;
      top: 20px;
      position: relative;
      -webkit-transition: 0.5s ease;
    }

    a::before {
    position: absolute;
    width: 0%;
    height: 1px;
    bottom: -2px;
    left: 0;
    background-color: #1A1B1C;
    visibility: hidden;
    -webkit-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
    }

    &:hover{
    text-shadow: 0px -2px 0px rgba(0,0,0,1), 0 0 5px rgba(255,255,255,0.8),0 -4px 15px rgba(255,255,255,0.5);
    }

  &:hover ~ .underbar{
    left: 150px;
    width: 50px;
    height: 1px;
    background: rgba(150,250,250,0.5);
    box-shadow: 0 0 10px rgba(70,250,250,1);
  }

`



const Footer = () => (
        <FooterGroup>
            <FooterContainer>
                <Saying>
                    <SayingHello href="mailto:me@trujamal.com?subject=Hello 🤙">
                    Say Hello <Sayingspan><Emoji symbol="🤙"/></Sayingspan>
                    </SayingHello>
                    <SayingHelloSubText>For work enquires head over to <SayingHelloSubLink href="https://veveusa.com"> Veve.</SayingHelloSubLink>.</SayingHelloSubText>
                </Saying>
            	<LinkGroup>© 2019 Jamal Rasool<LinkGroupReference class="top" href="#top">Top</LinkGroupReference></LinkGroup>
            </FooterContainer>
        </FooterGroup>
)
        
        
export default Footer

