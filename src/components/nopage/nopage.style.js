import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

import { Media, rgba } from "../../assets/mixins"
import { Colors } from "../../assets/variables"

export const Box = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100vh;
  background: ${Colors.gallery};
`

export const BoxInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const Wrapper = styled.footer`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  margin: auto;
  padding: 25px;
  background: ${Colors.white};
  box-shadow: 0 0 2px 0 ${rgba(Colors.mineShaft, 0.08)};
  z-index: 2;

  ${Media.xlg`
    width: 75%
  `}

  ${Media.sm`
    top: 50%;
    width: 90%;
  `}
`
export const Title = styled.h3`
  margin-top: 15px;
  margin-bottom: 5px;
  font-size: 1rem;
  text-align: center;
  user-select: none;
  cursor: default;
`

export const Subtitle = styled.h4`
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 0.85rem;
  text-align: center;
  user-select: none;
  cursor: default;
`

export const Emoji = styled.div``

export const Lead = styled.h5`
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 0.75rem;
  font-weight: normal;
  font-style: italic;
  text-align: center;
  line-height: 1.4;
  user-select: none;
  cursor: default;
`

export const Link = styled(GatsbyLink)`
  margin-top: 5px;
  margin-bottom: 5px;
  background: none;
  color: ${Colors.mineShaft};
  transition: 0.2s all;
  font-size: 0.75rem;
  font-weight: normal;
  font-style: italic;
  text-align: center;
  line-height: 1.4;
  user-select: none;
  cursor: pointer;

  &:hover {
    color: ${Colors.mountainMeadow};
  }
`
