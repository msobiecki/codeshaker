import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import FAVICON from "../data/images/favicon.png"

const Layout = ({ children, data }) => {
  const intl = useIntl()

  return (
    <>
      <Helmet title={data.title}>
        <html lang={intl.locale} />
        <link rel="canonical" href={data.href} />
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.keywords} />
        <meta name="author" content={data.author} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:url" content={data.href} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={intl.locale} />
        <meta property="og:site_name" content={data.title} />
        <meta property="og:image" content={`${data.href}${FAVICON}`} />
        <meta property="og:image:alt" content={data.title} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
      </Helmet>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.object,
  data: PropTypes.object,
}

export default Layout
