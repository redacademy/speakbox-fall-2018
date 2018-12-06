import React, { Component } from 'react'
import { View } from 'react-native'
import { getAPI } from '../../config/api'

export default class ForgotPassword extends Component {
  callingAPI = async () => {
    const res = await getAPI('auth/password/forgot', {
      method: 'POST',
      body: JSON.stringify({
        email: 'user@example.com'
      })
    })
    console.log(res)
  }
  componentDidMount() {
    this.callingAPI()
  }
}
