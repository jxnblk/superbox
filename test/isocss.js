import React from 'react'
import { create as render } from 'react-test-renderer'
import { renderIntoDocument } from 'react-dom/test-utils'
import Box from '../dist/isocss'

const getCSS = style => style.props.dangerouslySetInnerHTML.__html
const renderJSON = el => render(el).toJSON()

describe('superbox/isocss', () => {
  test('renders', () => {
    const box = renderJSON(<Box />)
    expect(box).toMatchInlineSnapshot(`
Array [
  <style
    dangerouslySetInnerHTML={
      Object {
        "__html": "",
      }
    }
  />,
  <div
    className=""
  />,
]
`)
  })

  test('renders with styles', () => {
    const [style, box] = renderJSON(
      <Box width={1 / 2} px={2} color="tomato" fontSize={3} />
    )
    const css = getCSS(style)
    expect(css).toMatch(/width:50%/)
    expect(css).toMatch(/padding-left:8px/)
    expect(css).toMatch(/padding-right:8px/)
    expect(css).toMatch(/color:tomato/)
    expect(css).toMatch(/font-size:20px/)
    /*
    expect(box).toHaveStyleRule('width', '50%')
    expect(box).toHaveStyleRule('padding-left', '8px')
    expect(box).toHaveStyleRule('padding-right', '8px')
    expect(box).toHaveStyleRule('color', 'tomato')
    expect(box).toHaveStyleRule('font-size', '20px')
    */
  })

  test('renders with css prop', () => {
    const [style, box] = renderJSON(
      <Box
        css={{
          borderRadius: '4px'
        }}
      />
    )
    const css = getCSS(style)
    expect(css).toMatch(/border-radius:4px/)
    // expect(box).toHaveStyleRule('border-radius', '4px')
  })

  test('renders a different element', () => {
    const [style, box] = renderJSON(<Box is="header" />)
    expect(box.type).toBe('header')
  })

  // isocss uses React.forwardRef
  test.skip('ref gets React component', () => {
    const ref = React.createRef()
    renderIntoDocument(<Box ref={ref} />)
    expect(ref.current instanceof Box).toBe(true)
  })

  test('innerRef gets underlying element', () => {
    const ref = React.createRef()
    renderIntoDocument(<Box innerRef={ref} />)
    expect(ref.current instanceof Element).toBe(true)
    expect(ref.current.tagName).toBe('DIV')
    expect(typeof ref.current.className).toBe('string')
  })
})
