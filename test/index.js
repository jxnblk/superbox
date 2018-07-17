import 'jest-styled-components'
import React from 'react'
import { create as render } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import Box from '../src'

const renderJSON = el => render(el).toJSON()

describe('superbox', () => {
  test('renders', () => {
    const box = renderJSON(<Box />)
    expect(box).toMatchInlineSnapshot(`
<div
  className=""
/>
`)
  })

  test('renders with styles', () => {
    const box = renderJSON(
      <Box
        width={1/2}
        px={2}
        color='tomato'
        fontSize={3}
      />
    )
    expect(box).toHaveStyleRule('width', '50%')
    expect(box).toHaveStyleRule('padding-left', '8px')
    expect(box).toHaveStyleRule('padding-right', '8px')
    expect(box).toHaveStyleRule('color', 'tomato')
    expect(box).toHaveStyleRule('font-size', '20px')
  })

  test('renders with css prop', () => {
    const box = renderJSON(
      <Box
        css={{
          borderRadius: '4px'
        }}
      />
    )
    expect(box).toHaveStyleRule('border-radius', '4px')
  })

  test('renders a different element', () => {
    const box = renderJSON(
      <Box is='header' />
    )
    expect(box.type).toBe('header')
  })

  test('renders with theme variant props', () => {
    const box = renderJSON(
      <Box
        variant='hello'
        theme={{
          boxes: {
            hello: {
              bg: 'tomato',
              css: {
                textTransform: 'uppercase'
              }
            }
          }
        }}
      />
    )
    expect(box).toHaveStyleRule('background-color', 'tomato')
    expect(box).toHaveStyleRule('text-transform', 'uppercase')
  })

  test('renders with theme from ThemeProvider', () => {
    const theme = {
      boxes: {
        hello: {
          bg: 'tomato',
          css: {
            textTransform: 'uppercase'
          }
        }
      }
    }

    const box = renderJSON(
      <ThemeProvider theme={theme}>
        <Box variant='hello' />
      </ThemeProvider>
    )
    expect(box).toHaveStyleRule('background-color', 'tomato')
    expect(box).toHaveStyleRule('text-transform', 'uppercase')
  })
})
