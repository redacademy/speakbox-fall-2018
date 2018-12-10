import React, { Component } from "react";
import CommunityQuestion from "./CommunityQuestion";

export default class CommunityQuestionContainer extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "Community"
  };

  render() {
    return <CommunityQuestion />;
  }
}
