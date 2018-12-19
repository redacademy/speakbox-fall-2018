import React, { Component } from "react";
import ActivityDetails from "./ActivityDetails";
import globalStyles from "../../config/styles";
import { apiPromise } from "../../lib/API/";


export default class ActivityContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      activity: {},
      allActivities: {}
    };
  }
  static navigationOptions = {
    title: "Activity",
    headerStyle: {
      backgroundColor: "#bbded6",
      borderBottomColor: "#bbded6"
    }
  };

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  getActivity = async () => {
    const activityId = this.props.navigation.getParam("id");
    const res = await apiPromise(
      `/activities/${activityId}?include=activityCategories`,
      {
        headers: {}
      }
    );
    this.setState({ activity: res });
  };

  getAllActivities = async () => {
    const results = await apiPromise("/activities?include=activityCategories", {
      headers: {}
    });
    this.setState({ allActivities: results });
  };

  componentDidMount() {
    this.getActivity();
    this.getAllActivities();
  }
  render() {
    return (
      <ActivityDetails
        activity={this.state.activity.data}
        allActivities={this.state.allActivities.data}
        navigation={this.props.navigation}
        isVisible={this.state.isVisible}
        toggleVisibility={this.toggleVisibility}
      />
    );
  }
}
