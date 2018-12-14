import React, { Component } from "react";
import CommunityQuestion from "./CommunityQuestion";
import PropTypes from "prop-types";

class CommunityQuestionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }
  static navigationOptions = {
    title: "Community"
  };

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <CommunityQuestion
        navigation={this.props.navigation}
        isVisible={this.state.isVisible}
        toggleVisibility={this.toggleVisibility}
      />
    );
  }
}

CommunityQuestionContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default CommunityQuestionContainer;
