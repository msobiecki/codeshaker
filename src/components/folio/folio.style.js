import styled from "styled-components"
import { motion } from "framer-motion"

import { Media } from "../../assets/mixins"
import { Colors } from "../../assets/variables"

export const Box = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background: ${Colors.white};
`

export const Curtain = styled(motion.div)`
  position: fixed;
  display: block;
  width: 50%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: default;
  z-index: 1;

  ${Media.lg`
    position: relative;
    width: 100%;
    top: initial;
    right: initial;
    bottom: initial;
    left: initial;
    z-index: initial;
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 25px;
  background: ${Colors.white};

  ${Media.lg`
    padding: 15px;
  `}
`

export const TitleHolder = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  ${Media.lg`
    position: initial;
    top: initial;
    left: initial;
    transform: initial;
    z-index: initial;
  `}
`

export const Title = styled(motion.h1)`
  display: inline-block;
  font-size: 4.8rem;
  user-select: none;
  cursor: default;

  ${Media.lg`
    display: block;
    width: 100%;
    text-align: center;
  `}

  ${Media.sm`
    font-size: 10vw;
  `}
`

export const Lead = styled(motion.h2)`
  display: inline-block;
  max-width: 50%;
  user-select: none;
  cursor: default;

  ${Media.lg`
    display: block;
    width: 100%;
    text-align: center;
    max-width: initial;
  `}

  ${Media.sm`
    font-size: 5vw;
  `}
`

export const Main = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`

export const Item = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100vh;
  padding-left: 50%;
  background: ${Colors.gallery};

  ${Media.lg`
    padding-left: 0;
  `}
`

export const ItemInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 2;
`
export const Grow = styled.div`
  flex-grow: 1;
`
