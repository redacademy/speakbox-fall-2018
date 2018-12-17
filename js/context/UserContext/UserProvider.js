import React, { Component } from "react";
import {
  queryAddUserToken,
  queryRemoveUserToken,
  queryUpdateUser,
  queryGetUser
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

  updateUser = async (
    plantName,
    avatar,
    streak,
    savedActivityID,
    activityRating
  ) => {
    await queryUpdateUser(
      plantName,
      avatar,
      streak,
      savedActivityID,
      activityRating
    );
    this.getUser();
  };

  getUser = () => {
    this.setState({ user: queryGetUser() });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          addUserToken: this.addUserToken,
          removeUserToken: this.removeUserToken,
          updateUser: this.updateUser,
          getUser: this.getUser
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export { UserProvider };
export default UserContext;
