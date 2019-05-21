import React from 'react'
import Link from 'next/link'
import { Box, Heading, Button } from 'grommet'

const Navigation = () => (
  <Box
    tag='header'
    direction='row-responsive'
    justify='between'
    align='center'
    background='brand'
    pad='medium'
    as='nav'
  >
    <Box direction='row' align='center' gap='small' >
      <Heading level='1' size='small'>
        Rocket Explorer 🚀 ✨ 🔭
      </Heading>
      <Link href='/' passHref>
        <Button label='Rest API' />
      </Link>
      <Link href='/about' passHref>
        <Button label='About' />
      </Link>
    </Box>
  </Box>
)

export default Navigation
