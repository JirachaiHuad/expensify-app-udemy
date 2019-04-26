import React from 'react'
import { connect } from 'react-redux'

import { startLogIn } from '../actions/auth'

export class LoginPage extends React.Component {
  render () {
    return (
      <div>
        <button onClick={this.props.startLogIn}>Login</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogIn: () => dispatch(startLogIn())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
