import React, { Component } from "react";
import {
  queryAddUserToken,
  queryRemoveUserToken,
  queryUpdateUser,
  queryGetUser,
  queryAddActivity,
  queryRemoveActivity,
  queryAddJournal,
  queryRemoveJournal,
  queryFirstTime
} from "../../config/models";

const UserContext = React.createContext();

class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    queryGetUser();
  }

  addUserToken = async (id, token) => {
    await queryAddUserToken(id, token);
    this.getUser();
  };

  removeUserToken = async id => {
    await queryRemoveUserToken(id);
    this.getUser();
  };

  updateUser = async (avatar, plantName) => {
    await queryUpdateUser(avatar, plantName);
    this.getUser();
  };

  getUser = () => {
    this.setState({ user: queryGetUser() });
  };

  addActivity = async (activityID, activityRating, dateRecorded) => {
    await queryAddActivity(activityID, activityRating, dateRecorded);
    this.getUser();
  };

  removeActivity = async activityID => {
    await queryRemoveActivity(activityID);
    this.getUser();
  };

  addJournal = async (journalID, imageUrl, hashTags) => {
    await queryAddJournal(journalID, imageUrl, hashTags);
    this.getUser();
  };

  removeJournal = async journalID => {
    await queryRemoveJournal(journalID);
    this.getUser();
  };

  firstTime = async (showOnBoarding, showPrivacyPolicy) => {
    await queryFirstTime(showOnBoarding, showPrivacyPolicy);
    this.getUser();
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          addUserToken: this.addUserToken,
          removeUserToken: this.removeUserToken,
          updateUser: this.updateUser,
          getUser: this.getUser,
          addActivity: this.addActivity,
          removeActivity: this.removeActivity,
          addJournal: this.addJournal,
          removeJournal: this.removeJournal,
          firstTime: this.firstTime
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export { UserProvider };
export default UserContext;
