import React, { Component } from "react";
import Activity from "./Activity";
import { View } from "react-native";

export default class ActivityContainer extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "Activity"
  };
  render() {
    return <Activity />;
  }
}
