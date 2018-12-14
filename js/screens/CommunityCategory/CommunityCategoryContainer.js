import React, { Component } from "react";
import CommunityCategory from "./CommunityCategory";
import { apiPromise } from "../../lib/API/";
import { withNavigationFocus } from "react-navigation";

class CommunityCategoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  static navigationOptions = {
    title: "Community"
  };

  _filterLatestToOldest = posts => {
    return posts.sort((a, b) => {
      if (a.created_at > b.created_at) return -1;
      if (a.created_at < b.created_at) return 1;
      if (a.created_at === b.created_at) return 0;
    });
  };

  _filterOldestToLatest = posts => {
    const oldToLate = posts.data.sort((a, b) => {
      if (a.created_at < b.created_at) return -1;
      if (a.created_at > b.created_at) return 1;
      if (a.created_at === b.created_at) return 0;
    });
    this.setState({ data: oldToLate });
  };

  _filterUnanswered = posts => {
    const unanswered = posts.data.sort((a, b) => {
      if (a.comments.data.length < b.comments.data.length) return -1;
      if (a.comments.data.length > b.comments.data.length) return 1;
      if (a.comments.data.length === b.comments.data.length) return 0;
    });
    const result = this._filterLatestToOldest(unanswered);

    this.setState({ data: result });
  };

  _filterMyPosts = posts => {
    const myPosts = posts.data.filter(topic => {
      return topic.user_id === 1; // change to my user id when realm&context is available
    });
    const result = this._filterLatestToOldest(myPosts);
    this.setState({ data: result });
  };

  orderPosts = (posts, filter) => {
    switch (filter) {
      case "oldToLate":
        this._filterOldestToLatest(posts);

        break;
      case "unanswered":
        this._filterUnanswered(posts);

        break;
      case "mine":
        this._filterMyPosts(posts);

        break;

      default:
        const result = this._filterLatestToOldest(posts.data);
        this.setState({ data: result });

        break;
    }
  };

  getPosts = async filter => {
    const category = this.props.navigation.getParam("category");
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnNwZWFrYm94LXN0YWdpbmcuY2FcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE1NDQ2NTQyMzgsImV4cCI6MTU0NDY1NzgzOCwibmJmIjoxNTQ0NjU0MjM4LCJqdGkiOiJ6dzFFWkEzcUpxSkZVNktxIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.bw7f_UwpbfdFwloC7_EcJ1xB6CJ4GUFb4X718l4k2aE";
    const res = await apiPromise(
      `/categories/${category.id}/topics?include=category,user,comments`,
      {
        headers: {
          Authorization: `Bearer${[token]}`
        }
      }
    );
    this.orderPosts(res, filter);
    this.setState({ data: res });
  };

  componentDidMount() {
    this.getPosts();
  }
  render() {
    const category = this.props.navigation.getParam("category");
    return (
      <CommunityCategory
        topics={this.state.data}
        name={category.name}
        categoryID={category.id}
        navigation={this.props.navigation}
        getPosts={this.getPosts}
      />
    );
  }
}

export default withNavigationFocus(CommunityCategoryContainer);
