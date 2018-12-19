import React, { Component } from "react";
import Journal from "./Journal";

export default class JournalContainer extends Component {
  constructor() {
    super();
    this.state = {
      journalVisible: true,
      activityVisible: false
    };
  }
  toggleVisibility = () => {
    this.setState({ journalVisible: !this.state.journalVisible });
    this.setState({ activityVisible: !this.state.activityVisible });
  };

  render() {
    return (
      <Journal
        journalVisible={this.state.journalVisible}
        activityVisible={this.state.activityVisible}
        toggleVisibility={this.toggleVisibility}
      />
    );
  }
}
