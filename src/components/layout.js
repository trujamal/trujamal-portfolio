import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import "./layout.css"
import Footer from "../components/Footer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
        allContentfulLink(sort: {fields: [createdAt], order: ASC}) {
          edges {
            node{
              title
              url
              createdAt
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header />
        <main>{children}</main>
        <Footer>
        </Footer>   
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
