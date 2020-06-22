import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../layouts"

import Folio from "../components/folio"

const IndexPage = ({ data }) => (
  <Layout data={data.site.siteMetadata}>
    <Folio content={data.content} folios={data.allFolio.nodes} />
  </Layout>
)

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  query SiteMetadataQuery {
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
    }
    allFolio {
      nodes {
        id
        name
      }
    }
  }
`
