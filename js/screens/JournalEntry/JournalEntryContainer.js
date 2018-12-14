import React, { Component } from "react";
import JournalEntry from "./JournalEntry";
import PropTypes from "prop-types";

class JournalEntryContainer extends Component {
  static navigationOptions = {
    title: "Journal Entry"
  };
  render() {
    return <JournalEntry navigation={this.props.navigation} />;
  }
}

JournalEntryContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default JournalEntryContainer;
