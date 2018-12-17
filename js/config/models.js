import Realm from "realm";

const User = {
  name: "User",
  primaryKey: "userID",
  properties: {
    userID: "int",
    plantName: "string",
    avatar: "string",
    streak: "int",
    savedActivityID: "int",
    activityRating: "int",
    token: "string"
  }
};

export const queryAddUserToken = (id, token) => {
  try {
    realm.write(async () => {
      await realm.create("User", {
        userId: id,
        token: token
      });
    });
  } catch (e) {
    return e;
  }
};

export const queryRemoveUserToken = id => {
  realm.write(() => {
    // updating token to empty string for logged out user
    addUserToken(id, "");
  });
};

export const queryUpdateUser = (
  plantName,
  avatar,
  streak,
  savedActivityID,
  activityRating
) => {
  try {
    realm.write(async () => {
      await realm.create("User"),
        {
          plantName: plantName,
          avatar: avatar,
          streak: streak,
          savedActivityID,
          activityRating
        };
    });
  } catch (e) {
    return e;
  }
};

export const queryGetUser = async () => {
  try {
    let user = await realm.objects("User").map(user => user);
    console.log("context", user);
    return user;
  } catch (e) {
    return e;
  }
};

const realm = new Realm({ schema: [User] });

export default realm;
