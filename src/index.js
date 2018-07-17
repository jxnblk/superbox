import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
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

const Box = styled(tag)([],
  color,
  space,
  fontSize,
  width,
  props => props.css
)

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
