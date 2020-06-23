import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import { useWindowWidth } from "@react-hook/window-size"
import Img from "gatsby-image"

import { Breakpoints } from "../../assets/variables"

import Services from "../services"
import Footer from "../footer"

import {
  Box,
  Main,
  Curtain,
  Content,
  Item,
  ItemInner,
  ItemInnerContent,
  ItemInnerTitle,
  ItemInnerLead,
  ItemTags,
  TitleHolder,
  Title,
  Lead,
  Grow,
} from "./folios.style"

const Folios = ({ content, folios }) => {
  const intl = useIntl()
  const windowWidth = useWindowWidth()

  return (
    <Box>
      <Curtain
        initial={windowWidth < Breakpoints.lg ? false : { width: "100%" }}
        animate={
          windowWidth < Breakpoints.lg ? { width: "100%" } : { width: "50%" }
        }
        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
      >
        <Content>
          <TitleHolder>
            <Title
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6, ease: "easeInOut" }}
            >
              {intl.formatMessage({
                id: content.title.split(" ").join("_").toUpperCase(),
                defaultMessage: content.title,
              })}
            </Title>
          </TitleHolder>
          <Lead
            initial={
              windowWidth < Breakpoints.lg
                ? { opacity: 0, scale: 0 }
                : { opacity: 0, translateX: 25 }
            }
            animate={
              windowWidth < Breakpoints.lg
                ? { opacity: 1, scale: 1 }
                : { opacity: 1, translateX: 0 }
            }
            transition={{ duration: 0.4, delay: 1 }}
          >
            {intl.formatMessage({
              id: content.lead.split(" ").join("_").toUpperCase(),
              defaultMessage: content.lead,
            })}
          </Lead>
          <Grow />
          <Services />
        </Content>
      </Curtain>
      <Main>
        {folios &&
          [...folios]
            .sort((a, b) => a.frontmatter.order - b.frontmatter.order)
            .map((folio) => (
              <Item
                key={folio.id}
                backgroundColor={folio.frontmatter.background_color}
              >
                <ItemInner>
                  {folio.frontmatter.is_background_image &&
                    folio.frontmatter.background_image && (
                      <Img
                        loading="lazy"
                        fadeIn={false}
                        fluid={
                          folio.frontmatter.background_image.childImageSharp
                            .fluid
                        }
                        alt={folio.frontmatter.name}
                        style={{ width: "100%", height: "100%", opacity: 0.5 }}
                      />
                    )}

                  <ItemInnerContent
                    backgroundColor={folio.frontmatter.content_background_color}
                  >
                    <ItemInnerTitle>
                      {intl.formatMessage({
                        id: folio.frontmatter.title
                          .split(" ")
                          .join("_")
                          .toUpperCase(),
                        defaultMessage: folio.frontmatter.title,
                      })}
                    </ItemInnerTitle>
                    <ItemInnerLead>
                      {intl.formatMessage({
                        id: folio.frontmatter.lead
                          .split(" ")
                          .join("_")
                          .toUpperCase(),
                        defaultMessage: folio.frontmatter.lead,
                      })}
                    </ItemInnerLead>
                    {folio.frontmatter.tags &&
                      folio.frontmatter.tags.length > 0 && (
                        <ItemTags>
                          {folio.frontmatter.tags.join(" • ")}
                        </ItemTags>
                      )}
                  </ItemInnerContent>
                </ItemInner>
              </Item>
            ))}
        <Item>
          <ItemInner>
            <Footer footer={content.footer} />
          </ItemInner>
        </Item>
      </Main>
    </Box>
  )
}

export default Folios

Folios.propTypes = {
  content: PropTypes.object,
  folios: PropTypes.array,
}
