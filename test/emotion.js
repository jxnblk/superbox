import React from 'react'
import { create as render } from 'react-test-renderer'
import { renderIntoDocument } from 'react-dom/test-utils'
import { createSerializer, createMatchers } from 'jest-emotion'
import * as emotion from 'emotion'
import Box from '../dist/emotion'

expect.addSnapshotSerializer(createSerializer(emotion))
expect.extend(createMatchers(emotion))

const renderJSON = el => render(el).toJSON()

describe('superbox/emotion', () => {
  test('renders', () => {
    const box = renderJSON(<Box />)
    expect(box).toMatchInlineSnapshot(`
<div
  className="emotion-0"
/>
`)
  })

  test('renders with styles', () => {
    const box = renderJSON(
      <Box width={1 / 2} px={2} color="tomato" fontSize={3} />
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
    const box = renderJSON(<Box is="header" />)
    expect(box.type).toBe('header')
  })

  test('ref gets React component', () => {
    const ref = React.createRef()
    const box = renderIntoDocument(
      <Box ref={ref} />
    )
    expect(ref.current instanceof Box).toBe(true)
  })

  test('innerRef gets underlying element', () => {
    const ref = React.createRef()
    const box = renderIntoDocument(
      <Box innerRef={ref} />
    )
    expect(ref.current instanceof Element).toBe(true)
    expect(ref.current.tagName).toBe('DIV')
    expect(typeof ref.current.className).toBe('string')
  })
})
