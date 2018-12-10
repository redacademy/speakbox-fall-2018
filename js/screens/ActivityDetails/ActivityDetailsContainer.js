import React, { Component } from "react";
import ActivityDetails from "./ActivityDetails";

export default class ActivityContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }
  static navigationOptions = {
    title: "Activity",
    headerStyle: {
      backgroundColor: "#bbded6",
      borderBottomColor: "transparent"
    },
    titleStyle: {
      color: "#fff"
    }
  };
  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };
  render() {
    return (
      <ActivityDetails
        ActivityDetails={ActivityDetails}
        navigation={this.props.navigation}
        isVisible={this.state.isVisible}
        toggleVisibility={this.toggleVisibility}
      />
    );
  }
}
