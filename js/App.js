import React, { Component } from 'react'
import AppNavigator from './navigation/RootStackNavigator'
// import UserSigninContainer from './screens/UserSignin/UserSigninContainer'
// import { AuthStack } from './navigation/NavigationLayout'

export default class App extends Component {
  render() {
    return <AppNavigator />
  }
}
