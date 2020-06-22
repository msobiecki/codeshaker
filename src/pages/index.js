import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../layouts"

import Folios from "../components/folios"

const IndexPage = ({ data }) => (
  <Layout data={data.site.siteMetadata}>
    <Folios content={data.content} folios={data.allMarkdownRemark.nodes} />
  </Layout>
)

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    content {
      title
      lead
      footer {
        title
        subtitle
        emoji
        lead
        email
        phone
        linkedin
        facebook
      }
    }
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "folio" } } }) {
      nodes {
        id
        frontmatter {
          type
          order
          title
          lead
          background_color
          background_image {
            childImageSharp {
              fluid(maxWidth: 1920, grayscale: true) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          is_background_image
          tags
        }
      }
    }
  }
`
