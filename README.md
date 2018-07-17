
<img src='docs/logo.png' />

# superbox

Primitive React component for all your styles

[![Build Status][badge]][travis]

[badge]: https://img.shields.io/travis/jxnblk/superbox.svg?style=flat-square
[travis]: https://travis-ci.org/jxnblk/superbox

```sh
npm i superbox styled-components
```

```jsx
import React from 'react'
import Box from 'superbox'

export default props =>
  <Box
    fontSize={5}
    px={3}
    py={4}
    color='white'
    bg='black'>
    superbox
  </Box>
```

Superbox works with [styled-components][] out of the box.
To use it with [emotion][], import `superbox/emotion`,
and ensure the following are installed:

```sh
npm i emotion react-emotion emotion-theming
```

```js
import Box from 'superbox/emotion'
```

Try it out on [CodeSandbox][sandbox] – it also works with [emotion][emotion-sandbox].

[sandbox]: https://codesandbox.io/s/github/jxnblk/superbox/tree/master/examples/basic
[emotion-sandbox]: https://codesandbox.io/s/github/jxnblk/superbox/tree/master/examples/emotion

## Usage

### Responsive Styles

The core style props in the Box component are built with [styled-system][], which allows you to set style props in a mobile-first responsive way with arrays.

```jsx
// responsive width
<Box
  width={[
    1,    // 100% width at the smallest breakpoint
    1/2,  // 50% width at the next breakpoint and up
    1/4   // 25% width at the next breakpoint and up
  ]}
/>
```

```jsx
// responsive font size
<Box fontSize={[ 2, 3, 4, 5 ]} />
```


### `css` prop

The `css` prop can be used to apply custom styling to the component.

```jsx
// with style object
<Box
  css={{
    fontFamily: 'monospace'
  }}
/>
```

```jsx
// with CSS string
<Box
  css={`
    font-family: monospace;
  `}
/>
```

**Note:** the `css` prop expects an object or string, **not** [tagged templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates).

### `is` prop

Use the `is` prop to change the underlying HTML element or React component.

```jsx
// HTML example
<Box is='header' />
```

```jsx
// component example
<Box is={Link} />
```

### Extending

The Box component can be used to create custom style components without needing to import any CSS-in-JS libraries.

```jsx
import React from 'react'
import Box from 'superbox'

const Button = props =>
  <Box
    is='button'
    fontSize={1}
    m={0}
    px={3}
    py={2}
    color='white'
    bg='blue'
    {...props}
    css={{
      fontFamily: 'inherit',
      fontWeight: 'bold',
      display: 'inline-block',
      verticalAlign: 'middle',
      textAlign: 'center',
      border: 0,
      borderRadius: 2,
      textDecoration: 'none',
      appearance: 'none',
      '&:disabled': {
        opacity: 1/4
      }
    }}
  />

export default Button
```

### Styling based on props

You can adjust styling based on props when extending the Box component.

```jsx
const Banner = ({
  large,
  ...props
}) =>
  <Box
    px={large ? 4 : 3}
    py={large ? 3 : 2}
    {...props}
  />
```

This also works with the `css` prop.

```jsx
const Text = ({
  caps,
  ...props
}) =>
  <Box
    {...props}
    css={{
      textTransform: caps ? 'uppercase' : null
    }}
  />
```

### Theming

To use a custom theme, add a [`ThemeProvider`][theme-provider] to the root of your application with a custom `theme` object.

```jsx
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

export default () =>
  <ThemeProvider theme={theme}>
    {/* app */}
  </ThemeProvider>
```

See the styled-system docs on [theming](http://jxnblk.com/styled-system/getting-started#theming) for more information.


### Props

The `Box` component's props come from [styled-system][], which provides theme-based, responsive props.

- `fontSize`: styled-system's [fontSize](http://jxnblk.com/styled-system/api#fontsize) prop
- `color`: styled-system's [color](http://jxnblk.com/styled-system/api#color) prop
- `bg`: styled-system's [bg](http://jxnblk.com/styled-system/api#color) prop
- styled-system's [space](http://jxnblk.com/styled-system/api#space) props
  - `m`: margin
  - `mt`: margin-top
  - `mr`: margin-right
  - `mb`: margin-bottom
  - `ml`: margin-left
  - `mx`: margin-left and margin-right
  - `my`: margin-top and margin-bottom
  - `p`: padding
  - `pt`: padding-top
  - `pr`: padding-right
  - `pb`: padding-bottom
  - `pl`: padding-left
  - `px`: padding-left and padding-right
  - `py`: padding-top and padding-bottom
- `width`: styled-system's [width](http://jxnblk.com/styled-system/api#width) prop
- `css`: (string or object) pass custom CSS styles
- `is`: (string or components) change the underlying HTML tag or React component

## Related

- [styled-system][]
- [grid-styled][]
- [rebass][]
- [styled-components][]

---

### How is this different from...

#### [grid-styled][]
Superbox does not include the Flex component or flexbox props.
Grid Styled uses [system-components][], but this component does not.

#### [styled-system][]

This component is built with styled-system.

#### [Rebass][rebass]

Rebass is a much larger library of React components. This is just one component.

[grid-styled]: https://github.com/jxnblk/grid-styled
[styled-system]: https://github.com/jxnblk/styled-system
[system-components]: https://github.com/jxnblk/styled-system/tree/master/system-components
[styled-components]: https://github.com/styled-components/styled-components
[emotion]: https://github.com/emotion-js/emotion
[rebass]: https://github.com/jxnblk/rebass
[theme-provider]: https://www.styled-components.com/docs/advanced#theming
