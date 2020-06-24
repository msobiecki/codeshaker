import React from "react"
import { useIntl } from "gatsby-plugin-intl"

import {
  Box,
  BoxInner,
  Wrapper,
  Title,
  Subtitle,
  Emoji,
  Lead,
  Link,
} from "./nopage.style"

const NoPage = () => {
  const intl = useIntl()

  return (
    <Box>
      <BoxInner>
        <Wrapper>
          <Emoji>
            <span role="img" aria-label="emoji">
              ☹️
            </span>
          </Emoji>
          <Title>
            {intl.formatMessage({
              id: "NO_PAGE.404",
            })}
          </Title>
          <Subtitle>
            {intl.formatMessage({
              id: "NO_PAGE.SORRY_WE_COUDNT_FIND_THIS_PAGE",
            })}
          </Subtitle>
          <Lead>
            {intl.formatMessage({
              id:
                "NO_PAGE.BUT_DONT_WORRY_YOU_CAN_FIND_PLENTY_OF_OTHER_THINGS_ON_OUR_HOMEPAGE",
            })}
          </Lead>
          <Link to="/">
            {intl.formatMessage({
              id: "NO_PAGE.BACK_TO_HOMEPAGE",
            })}
          </Link>
        </Wrapper>
      </BoxInner>
    </Box>
  )
}

export default NoPage

NoPage.propTypes = {}
