import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

/*
 * This component is built using `gatsby-plugin-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-plugin-image`: https://www.gatsbyjs.com/plugins/gatsby-plugin-image/
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Headericon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300)
        }
      }
    }
  `)

  const image = getImage(data.placeholderImage)

  return <GatsbyImage image={image} alt="Placeholder" />
}

export default Image
