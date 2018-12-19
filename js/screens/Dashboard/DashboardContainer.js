import React, { Component, Fragment } from "react";
import Dashboard from "./Dashboard";

export default class DashboardContainer extends Component {
  render() {
    return (
      <Fragment>
        <Dashboard navigation={this.props.navigation} />
      </Fragment>
    );
  }
}
