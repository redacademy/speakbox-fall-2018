import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  AsyncStore
} from 'react-native'
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation'

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in'
  }
  render() {
    return (
      <View style={styles}>
        <Button title='Sign in!' onPress={this._signInAsync} />
      </View>
    )
  }
  _signInAsync = async () => {
    await AsyncStorage.setItem('token', 'abc')
    this.props.navigation.navigate('App')
  }
}

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props)
    this._authAsync()
  }

  _authAsync = async () => {
    const token = await AsyncStorage.getItem('token')
    this.props.navigation.navigate(token ? 'App' : 'Auth')
  }
  render() {
    return (
      <View style={styles}>
        <ActivityIndicator />
        <StatusBar barStyle='default' />
      </View>
    )
  }
}

const AppStack = createStackNavigator({
  Dashboard: DashboardScreen,
  Other: OtherScreen
})
const AuthStack = createStackNavigator({ SignIn: SignInScreen })

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
)
