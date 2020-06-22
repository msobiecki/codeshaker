import styled from "styled-components"
import { motion } from "framer-motion"

import { Media, rgba } from "../../assets/mixins"
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
  margin-left: 60px;
  transform: translate(-50%, -50%);
  z-index: 1;

  ${Media.lg`
    position: initial;
    top: initial;
    left: initial;
    margin-left: initial;
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
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : Colors.gallery};

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
`

export const Grow = styled.div`
  flex-grow: 1;
`

export const ItemInnerContent = styled.div`
  position: absolute;
  top: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transform: translateY(-50%);
  width: 50%;
  max-height: 50%;
  margin: auto;
  padding: 25px;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : Colors.gallery};
  box-shadow: 0 0 2px 0 ${rgba(Colors.mineShaft, 0.08)};
  z-index: 2;
`

export const ItemInnerTitle = styled.h3`
  margin-top: 25px;
  margin-bottom: 25px;
  font-size: 1.8rem;
  text-align: center;
  user-select: none;
  cursor: default;
`

export const ItemInnerLead = styled.h4`
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

export const ItemTags = styled.div`
  right: 5px;
  bottom: 5px;
  padding: 5px;
  background: ${rgba(Colors.mineShaft, 0.5)};
  color: ${Colors.white};
  font-size: 0.65rem;
  font-style: italic;
  text-align: center;
  cursor: default;
`
