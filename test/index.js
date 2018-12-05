import React from 'react'
import { create as render } from 'react-test-renderer'
import { renderIntoDocument } from 'react-dom/test-utils'
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
        width='50%'
        paddingLeft='8px'
        paddingRight='8px'
        color='tomato'
        fontSize='20px'
      />
    )
    expect(box).toHaveStyleRule('width', '50%')
    expect(box).toHaveStyleRule('padding-left', '8px')
    expect(box).toHaveStyleRule('padding-right', '8px')
    expect(box).toHaveStyleRule('color', 'tomato')
    expect(box).toHaveStyleRule('font-size', '20px')
  })

  test('renders responsive styles', () => {
    const box = renderJSON(
      <Box
        width={[ '100%', '50%', '25%' ]}
      />
    )
    expect(box).toHaveStyleRule('width', '100%')
    expect(box).toHaveStyleRule('width', '50%', {
      media: 'screen and (min-width:40em)'
    })
    expect(box).toHaveStyleRule('width', '25%', {
      media: 'screen and (min-width:52em)'
    })
  })

  test('does not throw when the array length is too long', () => {
    expect(() => {
      const box = renderJSON(
        <Box
          width={[ '100%', '50%', '25%', null, '25%', null, '50%' ]}
        />
      )
    }).not.toThrow()
  })

  test('renders numbers as pixel units', () => {
    const box = renderJSON(
      <Box
        fontSize={32}
      />
    )
    expect(box).toHaveStyleRule('font-size', '32px')
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
      <Box as='header' />
    )
    expect(box.type).toBe('header')
  })
})
