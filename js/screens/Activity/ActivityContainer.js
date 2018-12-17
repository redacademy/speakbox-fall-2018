import React, { Component } from "react";
import Activity from "./Activity";
import { apiPromise } from "../../lib/API/";

export default class ActivityContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: {}
    };
  }
  static navigationOptions = {
    title: "Activity"
  };

  getActivities = async () => {
    const res = await apiPromise("/activities?include=activityCategories", {
      headers: {}
    });
    this.setState({ activities: res });
  };

  componentWillMount() {
    this.getActivities();
  }
  render() {
    return (
      <Activity
        navigation={this.props.navigation}
        activities={this.state.activities.data}
      />
    );
  }
}
