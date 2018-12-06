import React, { Component } from 'react'

import UserSignup from './UserSignup'

export default class UserSignupContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPassword: false
    }
  }

  onSubmit = values => {
    console.log(values)
  }
  validate = values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Required'
    }
    if (!values.password) {
      errors.password = 'Required'
    }
    return errors
  }
  toggleShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }

  //   callingAPI = async () => {
  //     const res = await getAPI('/auth/register', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         first_name: 'John',
  //         last_name: 'Doe',
  //         email: 'user@example.com',
  //         password: 'secret',
  //         password_confirmation: 'secret'
  //       })
  //     })
  //     console.log(res)
  //   }
  //   componentDidMount() {
  //     this.callingAPI()
  //   }

  render() {
    return (
      <UserSignup
        onSubmit={this.onSubmit}
        validate={this.validate}
        toggleShowPassword={this.toggleShowPassword}
        showPassword={this.state.showPassword}
      />
    )
  }
}
