import { FC } from 'react'
import Layout from '../components/layout'
import { Box, Grid } from 'grommet';

const Index: FC = () => (
  <Layout>
    <Grid
      fill={true}
      rows={['full']}
      columns={['1/4', '3/4']}
      areas={[
        { name: 'sidebar', start: [0], end: [0] },
        { name: 'main', start: [1], end: [1] },
      ]}
      gap='small'
    >
      <Box
        direction="column"
        animation="slideRight"
        background='light-2'
        pad="small"
      >
        <h2>hello</h2>
        <h2>world</h2>
      </Box>
      <Box
        pad="small"
      >
        <h1>Rocket Explorer</h1>
      </Box>
    </Grid>
  </Layout>
)

export default Index
