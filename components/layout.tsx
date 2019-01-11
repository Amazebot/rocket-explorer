import { FC } from 'react'
import { Box, Grid, Grommet } from 'grommet'
import Navigation from './navigation'
import Head from 'next/head'

type Props = {
  title?: string
}

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '12px',
      height: '15px'
    }
  }
}

const Layout: FC<Props> = ({ children, title = '🚀 ✨ 🔭' }) => (
  <Grommet full={true} theme={theme}>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Box fill direction='column'>
      <Navigation />
      <Box as='main' fill={true}>{children}</Box>
    </Box>
  </Grommet>
)

export default Layout
