import React, { Component } from "react";
import AppNavigator from "./navigation/RootStackNavigator";
<<<<<<< HEAD
import { UserProvider } from "./context/UserContext";
=======
>>>>>>> add propTypes to activity screens

export default class App extends Component {
  render() {
    return (
     <UserProvider>
        <AppNavigator />
     </UserProvider>
    );
  }
}
