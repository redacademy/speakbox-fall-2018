import React, { Component } from "react";
import Checkin from "./Checkin";
import { View } from "react-native";
import globalStyles from "../../config/styles";

export default class CheckinContainer extends Component {
  static navigationOptions = {
    headerStyle: {
      ...globalStyles.navigationHeader
    }
  }
  render() {
    return (
      <View>
        <Checkin
        navigation={this.props.navigation}
        />
      </View>
    );
  }
}
