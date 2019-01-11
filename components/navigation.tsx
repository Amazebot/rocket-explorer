import { FC } from 'react'
import { Box, Button } from 'grommet'
import Link from 'next/link'

const Navigation: FC = () => (
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
      <Link href='/' passHref={true}>
        <Button label="Rest API" />
      </Link>
      <Link href='/about' passHref={true}>
        <Button label="About" />
      </Link>
    </Box>
  </Box>
)

export default Navigation
