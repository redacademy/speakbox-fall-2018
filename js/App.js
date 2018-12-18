import React, { Component } from "react";
import AppNavigator from "./navigation/RootStackNavigator";
import OnBoardingContainer from './screens/OnBoarding/OnBoardingContainer'

export default class App extends Component {
  render() {
    return <OnBoardingContainer />;
  }
}
