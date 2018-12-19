import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation'
import createBottomTabNavigator, { AuthStack } from './NavigationLayout'
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