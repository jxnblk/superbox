import Box from '../src'
import { Link } from 'react-router-dom'
import Logo from './logo'

<Logo size={96} />

```.jsx
<Box>
  <Box
    is='h1'
    mt={0}
    mb={4}
    fontSize={[ 6, 7 ]}>
    superbox
  </Box>
  <Box mb={3}
    fontSize={3}
    css={{ fontWeight: 'bold' }}>
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

