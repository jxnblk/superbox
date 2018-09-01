import React from 'react'
import RebassMDX from '@rebass/mdx'
import { Link } from 'react-router-dom'
import Box from '../src'

const components = {
  Box,
  Link,
}

export const Root = props =>
  <RebassMDX components={components}>
    <Box
      mx='auto'
      px={3}
      py={4}
      css={{
        maxWidth: '1024px'
      }}>
      {props.children}
    </Box>
  </RebassMDX>
