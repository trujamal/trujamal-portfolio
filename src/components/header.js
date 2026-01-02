import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'
import styled from 'styled-components'
import SoundcloudIcon from '../images/icons/icons8-soundcloudblk.svg'
import GithubIcon from '../images/icons/icons8-octocat.svg'
import InstagramIcon from '../images/icons/icons8-instagram.svg'

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
    font-weight: 400;
    letter-spacing: -.2px;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
`

const Icons = styled.a`
	margin-left: 16px;
	height: 25px;
	width: 25px;
	padding: 2px;
    display: block;
    float: right;
    color: #1A1B1C;
    position: relative;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    text-decoration: none;

    &:hover {
        transform: translateY(-3px);
    }
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
		 				<Icons href="//soundcloud.com/trujamal"><SoundcloudIcon /></Icons>
		 				<Icons href="//github.com/trujamal"><GithubIcon /></Icons>
		 				<Icons href="//www.instagram.com/trujamal/"><InstagramIcon /></Icons>
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