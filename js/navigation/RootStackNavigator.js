import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation'
import { ActivityIndicator, StatusBar } from 'react-navigation'
import createBottomTabNavigator, { AuthStack } from './NavigationLayout'
import React from 'react'
import { View } from 'react-native'
import AuthLoadingScreen from './../screens/AuthLoading'


export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: createBottomTabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
)