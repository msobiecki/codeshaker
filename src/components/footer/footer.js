import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import PropTypes from "prop-types"

import { Wrapper, Title, Subtitle, Emoji, Lead, Link } from "./footer.style"

const Footer = ({ footer }) => {
  const intl = useIntl()

  return (
    <Wrapper>
      <Emoji>{footer.emoji}</Emoji>
      <Lead>
        {intl.formatMessage({
          id: footer.lead.split(" ").join("_").toUpperCase(),
          defaultMessage: footer.lead,
        })}
      </Lead>
      <Title>
        {intl.formatMessage({
          id: footer.title.split(" ").join("_").toUpperCase(),
          defaultMessage: footer.title,
        })}
      </Title>
      <Subtitle>
        {intl.formatMessage({
          id: footer.subtitle.split(" ").join("_").toUpperCase(),
          defaultMessage: footer.subtitle,
        })}
      </Subtitle>

      <Link href={`mailto:${footer.email}`}>{footer.email}</Link>
      <Link href={`tel:${footer.phone}`}>{footer.phone}</Link>
    </Wrapper>
  )
}

export default Footer

Footer.propTypes = {
  footer: PropTypes.object,
}
