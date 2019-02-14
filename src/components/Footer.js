import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    background: #1a1b1c;
    color: #fff;
    height: 100vh;
    min-height: 480px;
    position: relative;

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
    background: url(data:image/png;base64,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) right center no-repeat;
    background-size: 12px 12px;
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

const SayingHello = styled.a`
    @import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700');	
    font-weight: 700;
    color: #F5FFFF;
    font-size: 32px;
    font-family: 'Lato', sans-serif;
    font-size: 32px;
    line-height: 40px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 16px;
    display: inline-block;
    cursor:grab;

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

const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #F5FFFF;
    margin: 0 auto;
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
                    Say Hello <Sayingspan>🤙</Sayingspan>
                    </SayingHello>
                    <SayingHelloSubText>For work enquires head over to <SayingHelloSubLink href="https://veveusa.com"> Veve.</SayingHelloSubLink>.</SayingHelloSubText>
                </Saying>
            	<LinkGroup>© 2019 Jamal Rasool<LinkGroupReference class="top" href="#top">Top</LinkGroupReference></LinkGroup>
            </FooterContainer>
        </FooterGroup>
)
        
        
export default Footer

