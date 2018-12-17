import Realm from "realm";

const User = {
  name: "User",
  primaryKey: "userID",
  properties: {
    userID: "int",
    plantName: "string",
    avatar: "string",
    streak: "int",
    token: "string",
    savedActivities: "Activity[]",
    journalEntries: "Journal[]",
    showOnBoarding: { type: "bool", default: true },
    showPrivacyPolicy: { type: "bool", default: true }
  }
};

const Activity = {
  name: "Activity",
  primaryKey: "activityID",
  properties: {
    activityID: "int",
    activityRating: "int",
    dateRecorded: "date"
  }
};

const Journal = {
  name: "Journal",
  primaryKey: "journalID",
  properties: {
    journalID: "int",
    imageUrl: "string",
    hashTags: "string[]"
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

export const queryUpdateUser = (avatar, plantName) => {
  try {
    realm.write(async () => {
      await realm.create("User"),
        {
          avatar: avatar,
          plantName: plantName
        };
    });
  } catch (e) {
    return e;
  }
};

export const queryGetUser = async () => {
  try {
    let user = await realm.objects("User").map(user => user);
    return user;
  } catch (e) {
    return e;
  }
};

export const queryAddActivity = (activityID, activityRating, dateRecorded) => {
  try {
    let activities = user.savedActivities;
    realm.write(async () => {
      await activities.push({
        activityID: activityID,
        activityRating: activityRating,
        dateRecorded: dateRecorded
      });
    });
  } catch (e) {
    return e;
  }
};

export const queryRemoveActivity = async activityID => {
  try {
    await realm.delete(realm.objectForPrimaryKey("Activity", activityID));
  } catch (e) {
    return e;
  }
};

export const queryAddJournal = (journalID, imageUrl, hashTags, streak) => {
  try {
    let journals = user.journalEntries;
    realm.write(async () => {
      await journals.push({
        journalID: journalID,
        imageUrl: imageUrl,
        hashTags: hashTags
      });
      await realm.create("User"),
        {
          streak: streak
        };
    });
  } catch (e) {
    return e;
  }
};

export const queryRemoveJournal = async journalID => {
  try {
    await realm.delete(realm.objectForPrimaryKey("Journal", journalID));
  } catch (e) {
    return e;
  }
};

export const queryFirstTime = (showOnBoarding, showPrivacyPolicy) => {
  try {
    realm.write(async () => {
      await realm.create("User", {
        showOnBoarding: showOnBoarding,
        showPrivacyPolicy: showPrivacyPolicy
      });
    });
  } catch (e) {
    return e;
  }
};

const realm = new Realm({ schema: [User, Activity, Journal] });

export default realm;
