import { load } from 'yamljs'
import { NextFC } from 'next'
import { Menu } from 'grommet'

const RestMenu: NextFC = (props: any) => (
  <div>
    <Menu label='Server' items={[
      { label: 'test' }
    ]} />
  </div>
  // <Menu items={load()} />
)

RestMenu.getInitialProps = async () => {
  const endpoints = load('/static/data/rest-endpoints.yml').v1
  return { endpoints }
}

export default RestMenu
