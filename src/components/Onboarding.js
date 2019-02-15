import React from 'react'
import styled from 'styled-components'
import Wave from '../components/wave'
import { Link } from "gatsby"
import './layout.css'

const OnboardingComp = () => (
	<div className="Onboarding">
	      <div className="OnboardingGroup">
	        <h1>creative</h1>
	        <h2>Shooting eye-catching<br />moments for fun</h2>
	        <p>Every image is a story in frame. Discover my most popular images and uncover the stories behind them.</p>
	        <Link to="/page-2/">Discover my work</Link>
	        <Wave/>
	      </div>
	</div>
)

export default OnboardingComp