import React, { Component } from "react";
import Community from "./Community";
import { apiPromise } from "../../lib/API/";
export default class CommunityContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isVisible: true
    };
  }
  static navigationOptions = {
    title: "Community"
  };

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  callingAPI = async () => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnNwZWFrYm94LXN0YWdpbmcuY2FcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE1NDM5NjIwODksImV4cCI6MTU0Mzk2NTY4OSwibmJmIjoxNTQzOTYyMDg5LCJqdGkiOiJwUHp5aVBpR3VCSUJ4N2ZGIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.C0VmOTeAcS8J32AgAsXLWPPyK_19UgTLuUdJENGdYms";
    const res = await apiPromise("/categories", {
      headers: {
        Authorization: `Bearer${[token]}`
      }
    });
    this.setState({ data: res });
  };

  componentDidMount() {
    this.callingAPI();
  }

  render() {
    return (
      <Community
        categories={this.state.data}
        navigation={this.props.navigation}
        isVisible={this.state.isVisible}
        toggleVisibility={this.toggleVisibility}
      />
    );
  }
}
