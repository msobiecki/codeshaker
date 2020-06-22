import React from "react"
import PropTypes from "prop-types"

import { Wrapper, Title, Subtitle, Emoji, Lead, Link } from "./footer.style"

const Footer = ({ footer }) => {
  return (
    <Wrapper>
      <Emoji>{footer.emoji}</Emoji>
      <Lead>{footer.lead}</Lead>
      <Title>{footer.title}</Title>
      <Subtitle>{footer.subtitle}</Subtitle>

      <Link href={`mailto:${footer.email}`}>{footer.email}</Link>
      <Link href={`tel:${footer.phone}`}>{footer.phone}</Link>
    </Wrapper>
  )
}

export default Footer

Folios.propTypes = {
  footer: PropTypes.object,
}
