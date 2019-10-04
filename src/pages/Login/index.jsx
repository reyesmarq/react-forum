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

  componentWillReceiveProps(nextProps) {
    /**
     * If we received the user we going to redirect the user to the home
     */
    if (nextProps.user) {
      return this.props.history.push('/')
    }
  }

  render() {
    return (
      <LoginForm
        onSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user
})

const mapDispatchToProps = (dispatch) => ({
  loginUser: (values) => dispatch(loginUser(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
