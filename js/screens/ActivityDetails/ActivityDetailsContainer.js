import React, { Component } from "react";
import ActivityDetails from "./ActivityDetails";

export default class ActivityContainer extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "Activity",
    headerStyle: {
      backgroundColor: "#bbded6"
    },
    titleStyle: {
      color: "#fff"
    }
  };
  render() {
    return (
      <ActivityDetails
        ActivityDetails={ActivityDetails}
        navigation={this.props.navigation}
      />
    );
  }
}
