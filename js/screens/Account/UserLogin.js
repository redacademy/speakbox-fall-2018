import React, { Component } from 'react'
import { View } from 'react-native'
import { getAPI } from '../../config/api'
import { Form, Field } from 'react-final-form'

export default class UserLogin extends Component {
  callingAPI = async () => {
    const res = await getAPI('/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: 'user@example.com',
        password: 'secret'
      })
    })
    console.log(res)
  }
  componentDidMount() {
    this.callingAPI()
  }

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        validate={values => values}
        render={({ handleSubmit, pristine, invalid }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username</label>
              <Field name='email' component='input' placeholder='Username' />
            </div>
            <div>
              <label>Password</label>
              <Field
                name='password'
                component='password'
                placeholder='Password'
              />
            </div>
            <button type='submit' disabled={pristine || invalid}>
              Sign In
            </button>
          </form>
        )}
      />
    )
  }
}