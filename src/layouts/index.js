import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

const Layout = ({ children, data }) => (
  <>
    <Helmet
      title={data.title}
      meta={[
        { name: "description", content: data.description },
        { name: "keywords", content: data.keywords },
        { name: "author", content: data.author },
      ]}
    />
    {children}
  </>
)

Layout.propTypes = {
  children: PropTypes.object,
  data: PropTypes.object,
}

export default Layout
