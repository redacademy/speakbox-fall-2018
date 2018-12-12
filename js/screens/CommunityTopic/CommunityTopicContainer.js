import React, { Component } from "react";
import { Text, View } from "react-native";
import CommunityTopic from "./CommunityTopic";
import { apiPromise } from "../../lib/API/";

class CommunityTopicContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isVisible: false
    };
  }

  static navigationOptions = {
    title: "Community"
  };

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  insertComment = async (comment, topicID) => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnNwZWFrYm94LXN0YWdpbmcuY2FcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE1NDQ1NDk2NTksImV4cCI6MTU0NDU1MzI1OSwibmJmIjoxNTQ0NTQ5NjU5LCJqdGkiOiI3cFVXWDUxZkpkNFdYMHI1Iiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.ZUg7kjsMBgAjyjMOOVX4QJbJNglSoEbjXO3aYka_Vmg";
    const res = await apiPromise(`/topics/${topicID}/comments`, {
      method: "POST",
      headers: {
        Authorization: `Bearer${[token]}`
      },
      body: JSON.stringify({
        content: comment
      })
    });
  };

  getTopics = async () => {
    const topic = this.props.navigation.getParam("topic");
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnNwZWFrYm94LXN0YWdpbmcuY2FcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE1NDQ1NDk2NTksImV4cCI6MTU0NDU1MzI1OSwibmJmIjoxNTQ0NTQ5NjU5LCJqdGkiOiI3cFVXWDUxZkpkNFdYMHI1Iiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.ZUg7kjsMBgAjyjMOOVX4QJbJNglSoEbjXO3aYka_Vmg";
    const res = await apiPromise(
      `/topics/${topic.id}?include=category,user,comments`,
      {
        headers: {
          Authorization: `Bearer${[token]}`
        }
      }
    );
    this.setState({ data: res });
  };

  componentDidMount() {
    this.getTopics();
  }

  render() {
    return (
      <CommunityTopic
        topic={this.state.data}
        isVisible={this.state.isVisible}
        toggleVisibility={this.toggleVisibility}
        insertComment={this.insertComment}
        getTopics={this.getTopics}
      />
    );
  }
}
export default CommunityTopicContainer;
