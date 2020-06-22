import styled from "styled-components"
import { motion } from "framer-motion"

import { Media } from "../../assets/mixins"
import { Colors } from "../../assets/variables"

export const Box = styled.div`
  display: grid;
  width: 100%;
  padding-top: 25px;
  grid-template-columns: auto auto auto;
  grid-gap: 25px;

  ${Media.sm`
    grid-template-columns: auto;
  `}
`

export const Column = styled.div`
  display: block;
  width: 100%;
`

export const Title = styled(motion.h3)`
  display: block;
  width: 100%;
  margin: 0 0 10px;
  font-size: 0.8rem;
  user-select: none;
  cursor: default;
`

export const Items = styled.ol`
  display: block;
  width: 100%;
  margin-left: 0;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  ${Media.sm`
    margin-bottom: 0;
  `}
`

export const Item = styled(motion.li)`
  display: block;
  width: 100%;
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.6;
  user-select: none;
  cursor: default;
`

export const NativeLink = styled.a`
  background: none;
  color: ${Colors.mineShaft};
`
