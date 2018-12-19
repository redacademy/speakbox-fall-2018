import React, { Component, Fragment } from "react";
import Checkin from "./Checkin";
import globalStyles from "../../config/styles";

export default class CheckinContainer extends Component {
  static navigationOptions = {
    headerStyle: {
      ...globalStyles.navigationHeader
    }
  }
  render() {
    return (
      <Fragment>
        <Checkin
        navigation={this.props.navigation}
        />
      </Fragment>
    );
  }
}
