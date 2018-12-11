import React, { Component } from "react";
import CommunityCategory from "./CommunityCategory";
import { apiPromise } from "../../lib/API/";
import { Text } from "react-native";

export default class CommunityCategoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  static navigationOptions = {
    title: "Community"
  };

  _filterLatestToOldest = () => {
    this.state.data.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      if (a === b) return 0;
    });
  };

  _filterOldestToLatest = () => {
    // s
  };

  _filterUnanswered = () => {
    // s
  };

  _filterMyPosts = () => {
    // s
  };

  callingAPI = async () => {
    const category = this.props.navigation.getParam("category");
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnNwZWFrYm94LXN0YWdpbmcuY2FcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE1NDQ1NDk2NTksImV4cCI6MTU0NDU1MzI1OSwibmJmIjoxNTQ0NTQ5NjU5LCJqdGkiOiI3cFVXWDUxZkpkNFdYMHI1Iiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.ZUg7kjsMBgAjyjMOOVX4QJbJNglSoEbjXO3aYka_Vmg";
    const res = await apiPromise(
      `/categories/${category.id}/topics?include=category,user,comments`,
      {
        headers: {
          Authorization: `Bearer${[token]}`
        }
      }
    );
    this.setState({ data: res });
  };

  componentDidMount() {
    this.callingAPI();
  }
  render() {
    const category = this.props.navigation.getParam("category");
    return (
      <CommunityCategory
        topics={this.state.data}
        name={category.name}
        navigation={this.props.navigation}
      />
    );
  }
}
