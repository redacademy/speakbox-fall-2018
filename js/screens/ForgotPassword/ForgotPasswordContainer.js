import React, { Component } from 'react'
import ForgotPassword from './ForgotPassword'

export default class ForgotPasswordContainer extends Component {
  render() {
    return <ForgotPassword navigation={this.props.navigation} />
  }
}