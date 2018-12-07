import React, { Component } from "react";
import Profile from "./Profile";
import { View } from "react-native";

export default class ProfileContainer extends Component {

  render() {
    return (
      <View>
        <Profile
        navigation={this.props.navigation}
        />
      </View>
    );
  }
}
