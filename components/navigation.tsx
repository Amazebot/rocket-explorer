import { FC } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Link from 'next/link'

const styles = {
  root: { flexGrow: 1 },
  grow: { flexGrow: 1 },
  menuButton: { marginLeft: -12, marginRight: 20 }
}

interface IProps {
  classes: { [className: string]: string }
}

const Navigation: FC = (props: IProps) => (
  <AppBar position='static'>
    <Toolbar>
      <Typography variant='title' color='inherit' className={props.classes.grow}>
        Rocket Explorer 🚀 ✨ 🔭
      </Typography>
      <Link href='/' passHref={true}>
        <Button>Rest API</Button>
      </Link>
      <Link href='/about' passHref={true}>
        <Button>About</Button>
      </Link>
    </Toolbar>
  </AppBar>
)

Navigation.propTypes = {
  classes: PropTypes.object.isRequired
}

export default Navigation
