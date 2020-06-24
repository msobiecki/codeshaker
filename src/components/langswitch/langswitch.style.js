import styled from "styled-components"

import { Colors } from "../../assets/variables"

export const Switchbox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  z-index: 1;
`

export const Switch = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 41px;
  height: 41px;
  margin: 2px;
  padding: 2px;
  background: none;
  color: ${Colors.mineShaft};
  transition: 0.2s all;
  font-size: 0.85rem;
  font-weight: bolder;
  text-align: center;
  line-height: 1.4;
  user-select: none;
  cursor: pointer;

  &:hover {
    color: ${Colors.mountainMeadow};
  }
`
