import { FC } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Navigation from '../components/navigation'
import Head from 'next/head'

type Props = {
  title?: string
}

const Layout: FC<Props> = ({ children, title = '🚀 ✨ 🔭' }) => (
  <div>
    <Head>
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <CssBaseline />
    </Head>
    <Navigation />
    {children}
  </div>
)

export default Layout
