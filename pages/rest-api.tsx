import { NextFC } from 'next'
import Layout from './_layout'
// import RestMenu from '../components/rest-menu'

const RestAPI: NextFC = () => (
  <Layout>
    {/* <Grid
      fill={true}
      rows={['full']}
      columns={['1/4', '3/4']}
      areas={[
        { name: 'sidebar', start: [0], end: [0] },
        { name: 'main', start: [1], end: [1] }
      ]}
      gap='small'
    >
      <Box direction='column' animation='slideRight' background='light-2'>
        <RestMenu />
      </Box>
      <Box pad='small'>
        <h1>Rocket Explorer</h1>
      </Box>
    </Grid> */}
  </Layout>
)

export default RestAPI
