import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'

const Header = ({ siteTitle }) => (
 	<div className="Header">
 		<div className="HeaderGroup">
 			<Link to="/">Trujamal</Link>
 			<Link to="/Work">Work</Link>
 			<Link to="/About">About</Link>
 			<Link to="/Contact">Contact</Link>
 			<Link to="/Portfolio">Porfolio</Link>
 		</div>
 	</div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
