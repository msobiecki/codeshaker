import React from "react"
import PropTypes from "prop-types"
import { useWindowWidth } from "@react-hook/window-size"

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
  TitleHolder,
  Title,
  Lead,
  Grow,
} from "./folio.style"

const Folio = ({ content, folios }) => {
  const windowWidth = useWindowWidth()
  console.log(content, folios)
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
              {content.title}
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
            {content.lead}
          </Lead>
          <Grow />
          <Services />
        </Content>
      </Curtain>
      <Main>
        {folios &&
          [...folios].reverse().map((folio) => (
            <Item key={folio.id}>
              <ItemInner>{folio.name}</ItemInner>
            </Item>
          ))}
        <Item>
          <ItemInner>
            <Footer />
          </ItemInner>
        </Item>
      </Main>
    </Box>
  )
}

export default Folio

Folio.propTypes = {
  content: PropTypes.object,
  folios: PropTypes.array,
}
