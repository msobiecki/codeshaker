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
        { name: "og:title", content: data.title },
        { name: "og:description", content: data.description },
        { name: "canonical", content: "https://codeshaker.pl/" },
        { name: "og:url", content: "https://codeshaker.pl/" },
        {
          name: "og:image",
          content:
            "https://scontent.fwaw5-1.fna.fbcdn.net/v/t1.0-9/45803453_548528595618645_6396031302537052160_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=HfdbknzKkjEAX-RggBA&_nc_ht=scontent.fwaw5-1.fna&oh=b51e7c78b7125766b77835029ae1eb83&oe=5F18BAED",
        },
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
