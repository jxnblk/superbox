import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import {
  color,
  space,
  fontSize,
  width,
  themeGet
} from 'styled-system'

const tag = React.forwardRef(({
  is: Component = 'div',
  width,
  color,
  bg,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  fontSize,
  css,
  ...props
}, ref) => (
  <Component
    {...props}
    ref={ref}
  />
))

const mapThemeProps = (Base, map) => withTheme(props => <Base {...map(props)} />)

const Base = styled(tag)([],
  color,
  space,
  fontSize,
  width,
  props => props.css
)

const Box = styled(mapThemeProps(Base, ({
  theme,
  variant,
  ...props
}) => ({
  ...themeGet([ 'boxes', variant ].join('.'), {})({ theme }),
  ...props,
})))([])

Box.displayName = 'Box'

Box.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...width.propTypes,
  css: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default Box
