import React from 'react'
import YAML from 'yamljs'
import * as API from '@amazebot/rocket-rest'
import Layout from '../components/layout'
import { Grid, Box, TextArea, FormField, Form, Button, Select } from 'grommet'

class RestAPI extends React.Component {
  constructor () {
    super()
    this.endpoints = YAML.load('static/data/rest-endpoints.yml')
    API.client('https://open.rocket.chat')
  }

  async submit ({ value }) {
    const { endpoint } = value
    const result = await API.get(endpoint)
    alert(JSON.stringify(result))
  }

  render () {
    return (
      <Layout title='Rest API' basis='full'>
        <Form onSubmit={this.submit} name='rest-api'>
          <Grid
            fill
            responsive
            rows={['xsmall', 'flex']}
            columns={['medium', 'medium', 'flex']}
            gap='small'
            margin='small'
            areas={[
              { name: 'connect', start: [0, 0], end: [2, 0] },
              { name: 'endpoint', start: [0, 1], end: [0, 1] },
              { name: 'query', start: [1, 1], end: [1, 1] },
              { name: 'result', start: [2, 1], end: [2, 1] }
            ]}
          >
            <Box gridArea='connect' />
            <Box gridArea='endpoint'>
              <FormField
                plain
                focusIndicator={false}
                label='Endpoint'
                name='endpoint'
                size='medium'
                options={this.endpoints.v1}
                component={Select}
              />
            </Box>
            <Box gridArea='query'>
              <FormField
                label='Query JSON'
                name='query'
                placeholder='{}'
                component={TextArea}
              />
              <Button type='submit' label='Submit' primary />
            </Box>
            <Box gridArea='result' />
          </Grid>
        </Form>
      </Layout>
    )
  }
}

export default RestAPI
