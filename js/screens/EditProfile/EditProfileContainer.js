import React, { Component } from "react";
import EditProfile from "./EditProfile";
import { View } from "react-native";

export default class EditProfileContainer extends Component {
  render() {
    return (
      <View>
        <EditProfile navigation={this.props.navigation} />
      </View>
    );
  }
}
