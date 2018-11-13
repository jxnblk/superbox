import React from 'react'
import Box from '../src'

const components = {
  Box,
}

export const Root = props =>
  <Box
    mx='auto'
    px={3}
    py={4}
    css={{
      maxWidth: '1024px'
    }}>
    {props.children}
  </Box>
