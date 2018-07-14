import Box from '../src'
import { Link } from 'react-router-dom'

# superbox

<Box
  innerRef={ref => console.log(ref)}
  px={3}
  py={4}
  color='white'
  bg='black'>
  <Box
    is='h1'
    m={0}
    fontSize={6}>
    superbox
  </Box>
  <Box mb={3}>
    Primitive React component for all your styles
  </Box>
  <Box
    is={Link}
    color='inherit'
    css={{
      fontWeight: 'bold'
    }}
    to='/getting-started'>
    Docs
  </Box>
</Box>


```.jsx
<Box
  innerRef={ref => console.log(ref)}
  px={3}
  py={4}
  color='white'
  bg='black'>
  <Box
    is='h1'
    m={0}
    fontSize={6}>
    superbox
  </Box>
  <Box mb={3}>
    Primitive React component for all your styles
  </Box>
  <Box
    is={Link}
    color='inherit'
    css={{
      fontWeight: 'bold'
    }}
    to='/getting-started'>
    Docs
  </Box>
</Box>
```

