import React, { Component } from "react";
import JournalStreak from "./JournalStreak";
import { View } from "react-native";

export default class JournalStreakContainer extends Component {
  static navigationOptions = {
    headerStyle: {
      ...globalStyles.navigationHeader
    }
  };
  render() {
    return (
      <View>
        <JournalStreak />
      </View>
    );
  }
}
