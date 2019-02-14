import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'
import styled from 'styled-components'

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

const Social = styled.div`
    float: right;
    height: 24px;
    color: #1A1B1C;
    background: #FFF;
    font-weight: 400;
    letter-spacing: -.2px;
    -moz-osx-font-smoothing:
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
`

const Icons = styled.a`
	margin-left: 16px;
	padding: 2px;
    display: block;
    float: right;
    color: #1A1B1C;
    position: relative;
    transition: all 0.3s ease;
    text-decoration: none;
`

const IconsImage = styled.img`
	height:20px;
	width:20px;
	content: url(${props => props.image});
`


class Header extends React.Component {
	render() {
		return(
		 	<div className="Header">
		 		<div className="HeaderGroup">
		 			<h1 className="titleOfMe">Jamal Rasool</h1>
		 			<div className="Group">
			 			<StyledLink to="/">Design</StyledLink>
			 			<StyledLink to="/Photos">Photos</StyledLink>
			 			<StyledLink to="/About">About</StyledLink>
		 			</div>
		 			<Social>
		 				<Icons href="//www.instagram.com/trujamal/"><IconsImage image={require('../images/icons/icons8-instagram.svg')}/></Icons>
		 				<Icons href="//github.com/trujamal"><IconsImage image={require('../images/icons/icons8-github.svg')}/></Icons>
		 				<Icons href="//soundcloud.com/trujamal"><IconsImage image={require('../images/icons/icons8-soundcloud.svg')}/></Icons>
		 			</Social>
		 		</div>
		 	</div>
 		)
	}
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

// <header>
// 		<div class="container group">
// 			<h1 class="titleheader">Carl Spencer</h1>
// 			<nav class="group">
// 				<a class="active" href="index.html">Design</a>
// 				<a href="photos.html">Photos</a>
// 				<a href="about.html">About</a>
// 			</nav>
// 			<div class="social">
// 				<a title="Dribbble" target="_blank" href="http://dribbble.com/CarlJSpencer"><img src="images/dribbble.svg" class="svg-icon"></a>
// 				<a title="Instagram" target="_blank" href="http://instagram.com/carljspencer"><img src="images/instagram.svg" class="svg-icon"></a>
// 			</div>
// 		</div>
// </header>
