import React, { Component } from "react";
import ActivityComplete from "./ActivityComplete";
import globalStyles from "../../config/styles";
export default class ActivityContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: {}
    };
  }
  static navigationOptions = {
    headerStyle: {
      ...globalStyles.navigationHeader
    }
  };

  render() {
    const activity = this.props.navigation.getParam("activity");
    return <ActivityComplete activity={activity} />;
  }
}
