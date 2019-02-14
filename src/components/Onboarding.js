import React from 'react'
import styled from 'styled-components'
import Wave from '../components/wave'
import { Link } from "gatsby"

const Onboarding = styled.div`

	  background: url('../images/Landscape04.jpg');
	  height: 920px;
	  background-size: cover;
	  background-position: center;
	  position: relative;
	  color: black;

  h1 {
	  margin: 0 auto;
	  font-family: 'SF Pro Display', sans-serif;
	  color:white;
	  -webkit-font-smoothing: antialiased;
	  font-size: 100px;
	  line-height: 1.2;
	  animation: OnBoardingAnimation;
	  animation-duration: 2s;
	  animation-delay: 0.1s;
	  opacity: 0;
	  animation-fill-mode: forwards;
	  animation-timing-function: cubic-bezier(0.2,0.8,0.2,1);
  }

  h2 {
	  font-family: 'Lato';
	  color: #1F1F1F;
	  font-weight: 800;
	  font-style: bold;
	  font-size: 36px;
	  line-height: 1.2;
	  animation: OnBoardingAnimation 3s forwards cubic-bezier(0.2,0.8,0.2,1);
	  opacity: 0;
  }

  p {
	  color:rgba(255,255,255,0.8);
	  font-size: 26px;
	  line-height: 1.5;
	  animation: OnBoardingAnimation 3s 0.2s forwards cubic-bezier(0.2,0.8,0.2,1);
	  opacity: 0;
  }

  a {
	  font-size:17px;
	  font-weight: 600;
	  color:black;
	  /*text-transform: uppercase;*/
	  background: #000;
	  padding: 9px 20px;
	  border: 1px solid rgba(255,255,255, 0.25);
	  border-radius: 20px;
	  transition: 0.8s cubic-bezier(0.2,0.8,0.2,1);
  }

  a:hover {
	  background: white;
	  color:black;
  }

	@media (max-width: 640px) {


	  h1{
	    font-size: 40px;
	  }

	  p {
	    font-size: 24px;
	  }
	}

`

const StyledLink = styled(Link)`
	font-family: 'Lato', sans-serif;
	color: #1A1B1C;
    position: relative;
    margin-right: 16px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -.2px;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
`

const OnBoardingGroup = styled.div`
  margin:0 auto;
  max-width: 500px;
  padding: 150px 50px;
  text-align: center;

  @media (max-width: 640px) {
    padding: 100px 20px;
	}
`


const OnboardingComp = () => (
	<Onboarding>
	      <OnBoardingGroup>
	        <h1>Well this compoennt is trash</h1>
	        <h2>Shooting eye-catching<br />moments for fun</h2>
	        <p>Every image is a story in frame. Discover my most popular images and uncover the stories behind them.</p>
	        <StyledLink to="/About/">Discover my work</StyledLink>
	        <Wave/>
	      </OnBoardingGroup>
	</Onboarding>
)

export default OnboardingComp