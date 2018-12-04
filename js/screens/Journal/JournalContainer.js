import React, { Component } from "react";
import Journal from "./Journal";
import { View } from "react-native";

export default class JournalContainer extends Component {
  render() {
    return (
      <View>
        <Journal />
      </View>
    );
  }
}
