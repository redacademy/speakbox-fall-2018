import React, { Component } from "react";
import AppNavigator from "./navigation/RootStackNavigator";
import { UserProvider } from "./context/UserContext";
import JournalEntry from "./screens/JournalEntry";

export default class App extends Component {
  render() {
    return (
      <UserProvider>
        <AppNavigator />
      </UserProvider>
    );
  }
}
