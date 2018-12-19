import React, { Component } from "react";
import {
  queryAddUserToken,
  queryRemoveUserToken,
  queryUpdateUser,
  queryGetUser,
  queryAddActivity,
  queryRemoveActivity,
  queryAddJournalEntry,
  queryRemoveJournalEntry,
  queryToggleShowOnBoarding,
  queryToggleShowPrivacyPolicy
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

  addJournalEntry = async (journalID, imageUrl, hashTags) => {
    await queryAddJournalEntry(journalID, imageUrl, hashTags);
    this.getUser();
  };

  removeJournalEntry = async journalID => {
    await queryRemoveJournalEntry(journalID);
    this.getUser();
  };

  toggleShowOnBoarding = async showOnBoarding => {
    await queryToggleShowOnBoarding(showOnBoarding);
    this.getUser();
  };

  toggleShowPrivacyPolicy = async showPrivacyPolicy => {
    await queryToggleShowPrivacyPolicy(showPrivacyPolicy);
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
          addJournalEntry: this.addJournalEntry,
          removeJournalEntry: this.removeJournalEntry,
          toggleShowOnBoarding: this.toggleShowOnBoarding,
          toggleShowPrivacyPolicy: this.toggleShowPrivacyPolicy
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export { UserProvider };
export default UserContext;
