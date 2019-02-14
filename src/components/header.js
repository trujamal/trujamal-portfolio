import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'

class Header extends React.Component {
	render() {
		return(
		 	<div className="Header">
		 		<div className="HeaderGroup">
		 			<h1 className="titleOfMe">Jamal Rasool</h1>
		 			<div className="Group">
			 			<Link to="/">Design</Link>
			 			<Link to="/Photos">Photos</Link>
			 			<Link to="/About">About</Link>
		 			</div>
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
