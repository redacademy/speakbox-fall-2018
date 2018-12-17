import React, { Component } from "react";
import Dashboard from "./Dashboard";
import { View } from "react-native";

export default class DashboardContainer extends Component {
  render() {
    return (
      <View>
        <Dashboard navigation={this.props.navigation} />
      </View>
    );
  }
}
