import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { all as cssProperties } from 'known-css-properties'

export const toPx = n => typeof n === 'number' ? n + 'px' : n

export const toCamelCase = str => {
  let s = str && str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
    .join('')
  return s.slice(0, 1).toLowerCase() + s.slice(1)
}

export const allowed = cssProperties.reduce((a, prop) => ({
  ...a,
  [prop]: true,
  [toCamelCase(prop)]: true
}), {})

export const breakpoints = [ 40, 52, 64 ].map(n => n + 'em')

export const mediaQueries = breakpoints.map(n => `@media screen and (min-width:${n})`)

// export const get = (obj, ...paths) => paths.reduce((a, path) => {
//   return a || (path + '').split('.').reduce((a, b) => (a && a[b]) ? a[b] : null, obj)
// }, null) || paths[paths.length - 1]

export const styleProps = props => {
  const styles = []

  for (let key in props) {
    if (!allowed[key]) continue
    const val = props[key]
    const getStyle = n => ({ [key]: toPx(n) })

    if (!Array.isArray(val)) {
      styles.push(getStyle(val))
      continue
    }

    val.forEach((v, i) => {
      if (i === 0) {
        styles.push(getStyle(v))
        return
      }
      const media = mediaQueries[i - 1]
      if (!media) return
      styles.push({
        [media]: getStyle(v)
      })
    })
  }
  return styles
}

const css = props => props.css

const Box = styled.div(
  styleProps,
  css
)

Box.displayName = 'Box'

Box.propTypes = {
  css: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default Box
