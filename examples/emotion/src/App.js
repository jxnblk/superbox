import React from 'react'
import Box from 'superbox/emotion'
import { ThemeProvider } from 'emotion-theming'

const Root = props =>
  <Box
    {...props}
    css={{
      fontFamily: 'system-ui, sans-serif',
      lineHeight: 1.5
    }}
  />

const Container = props =>
  <Box
    px={3}
    py={4}
    {...props}
    mx='auto'
    css={{
      maxWidth: '1024px'
    }}
  />

const Title = props =>
  <Box
    is='h1'
    m={0}
    fontSize={5}
    {...props}
  />

const Text = props =>
  <Box
    {...props}
    css={{
      fontWeight: 'bold'
    }}
  />

const Button = props =>
  <Box
    is='a'
    px={3}
    py={2}
    color='white'
    bg='black'
    fontSize={1}
    {...props}
    css={{
      display: 'inline-block',
      fontWeight: 'bold',
      textDecoration: 'none',
      borderRadius: '4px',
      '&:hover': {
        backgroundColor: 'magenta'
      }
    }}
  />

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={{}}>
        <Root
          px={3}
          py={4}>
          <Container>
            <Title>
              superbox
            </Title>
            <Text mb={3}>
              Primitive React component for all your styles
            </Text>
            <Button href='https://github.com/jxnblk/superbox'>
              GitHub
            </Button>
          </Container>
        </Root>
      </ThemeProvider>
    )
  }
}
