import React from 'react'
import { connect } from 'react-redux'

import { startLogIn } from '../actions/auth'

export class LoginPage extends React.Component {
  render () {
    return (
      <div className='box-layout'>
        <div className='box-layout__box'>
          <h1 className='box-layout__title'>Expensify</h1>
          <p>Get your expenses in check!</p>

          <button
            onClick={this.props.startLogIn}
            className='button'
          >
            Login with Google
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogIn: () => dispatch(startLogIn())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
