import React from 'react'
import RebassMDX from '@rebass/mdx'
import { Link } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import Box from '../src'

// experiment
const Styled = styled.div([], props => props)

const theme = {
  boxes: {
    card: {
      p: 3,
      css: {
        borderRadius: '4px',
        boxShadow: '0 0 16px rgba(0, 0, 0, .125)'
      }
    },
    banner: {
      px: 4,
      py: 6,
      color: 'white',
      bg: 'magenta'
    }
  }
}

const components = {
  theme,
  Box,
  Link,
  Styled,
}

export default props =>
  <ThemeProvider theme={theme}>
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
  </ThemeProvider>