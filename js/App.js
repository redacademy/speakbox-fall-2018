import React, { Component } from "react";
import AppNavigator from "./navigation/RootStackNavigator";
import UserLoginContainer from './screens/UserLogin/UserLoginContainer'

export default class App extends Component {
  render() {
    return <UserLoginContainer />;
  }
}
