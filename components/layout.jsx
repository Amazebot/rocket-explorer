import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { Box, Grommet } from 'grommet'
import Navigation from './navigation'

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '12px',
      height: '15px'
    }
  }
}

const Layout = ({ children, title = '🚀 ✨ 🔭' }) => (
  <Grommet full theme={theme}>
    <Head>
      <title>{title} | Rocket Explorer</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Box fill direction='column'>
      <Navigation />
      <Box as='main' fill>{children}</Box>
    </Box>
  </Grommet>
)

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Layout
