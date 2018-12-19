import React, { Component } from 'react'
import AppNavigator from './navigation/RootStackNavigator'
import OnBoardingContainer from './screens/OnBoarding/OnBoardingContainer'
// import Onboarding from 'react-native-onboarding-swiper';

export default class App extends Component {
  render() {
    return <OnBoardingContainer />
  }
}
