import { css } from "styled-components"

import { pSBC } from "./helpers/pSBC"
import { Breakpoints } from "./variables"

export const Media = Object.keys(Breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${Breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

const hexToRgb = (hex) => {
  // http://stackoverflow.com/a/5624139
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b
  })

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

export const rgba = (hex, alpha) => {
  const color = hexToRgb(hex)
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`
}

export const lighten = (hex, shade) => {
  return pSBC(shade * 0.01, hex)
}

export const darken = (hex, shade) => {
  return pSBC(shade * -0.01, hex)
}
