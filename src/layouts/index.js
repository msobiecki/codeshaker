import React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return <>{children}</>
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default Layout
