import React, { Component } from 'react';
import { connect } from 'react-redux'

import LoginForm from './LoginForm';

import { loginUser } from '../../store/actions/auth'

class LoginContainer extends Component {

  /**
   * In order for {submitting}  in loginform to work. This function must be an async function
   */
  handleSubmit = async (values) => {
    await this.props.loginUser(values)
  }
  render() {
    return (
      <LoginForm
        onSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (values) => dispatch(loginUser(values))
})

export default connect(null, mapDispatchToProps)(LoginContainer);
