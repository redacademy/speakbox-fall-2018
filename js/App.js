import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
// import AppNavigator from './navigation/RootStackNavigator'
import UserLogin from './screens/UserLogin/UserLoginContainer'
import UserSignupContainer from './screens/UserSignup/UserSignupContainer'

export default class App extends Component {
  render() {
    return <UserSignupContainer />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
