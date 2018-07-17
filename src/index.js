import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withTheme } from './theming/styled-components'
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


const Base = styled(tag)([],
  color,
  space,
  fontSize,
  width,
  props => props.css
)

const Box = ({
  theme,
  variant,
  ...props
}) =>
  <Base
    {...props}
    {...themeGet([ 'boxes', variant ].join('.'), {})({ theme })}
  />

Box.displayName = 'Box'

Box.defaultProps = {
  theme: {}
}

Box.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...width.propTypes,
  variant: PropTypes.string,
  css: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default withTheme(Box)

