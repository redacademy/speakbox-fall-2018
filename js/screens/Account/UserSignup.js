import React, { Component } from 'react'
import { View } from 'react-native'
import { getAPI } from '../../config/api'

export default class UserLogin extends Component {
  callingAPI = async () => {
    const res = await getAPI('/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        first_name: 'John',
        last_name: 'Doe',
        email: 'user@example.com',
        password: 'secret',
        password_confirmation: 'secret'
      })
    })
    console.log(res)
  }
  componentDidMount() {
    this.callingAPI()
  }
}
