import React, { Component } from "react";
import CommunityQuestion from "./CommunityQuestion";
import PropTypes from "prop-types";

class CommunityQuestionContainer extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "Community"
  };

  render() {
    return <CommunityQuestion navigation={this.props.navigation} />;
  }
}

CommunityQuestionContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default CommunityQuestionContainer;
