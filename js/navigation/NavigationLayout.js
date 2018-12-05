import React from "react";
import ActivityScreen from "../screens/Activity/Activity";
import CommunityScreen from "../screens/Community/Community";
import JournalScreen from "../screens/Journal/Journal";
import DashBoardScreen from "../screens/Dashboard/Dashboard";
import ProfileScreen from "../screens/Profile/Profile";
import EditProfileScreen from "../screens/EditProfile/EditProfile";
import { sharedNavigationOptions } from "./config";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Image } from "react-native";
import styles from "./styles";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    EditProfile: EditProfileScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const EditProfileStack = createStackNavigator(
  {
    EditProfile: EditProfileScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const ActivityStack = createStackNavigator(
  {
    Activity: ActivityScreen,
    Profile: ProfileScreen,
    EditProfile: EditProfileScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const CommunityStack = createStackNavigator(
  {
    Community: CommunityScreen,
    Profile: ProfileScreen,
    EditProfile: EditProfileScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const JournalStack = createStackNavigator(
  {
    Journal: JournalScreen,
    Profile: ProfileScreen,
    EditProfile: EditProfileScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const DashBoardStack = createStackNavigator(
  {
    DashBoard: DashBoardScreen,
    Profile: ProfileScreen,
    EditProfile: EditProfileScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createBottomTabNavigator(
  {
    DashBoard: DashBoardStack,

    Journal: JournalStack,

    Activity: ActivityStack,

    Community: CommunityStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let image;
        if (routeName === "Activity") {
          image = require("../assets/Icons/basketball-ball.png");
        } else if (routeName === "Community") {
          image = require("../assets/Icons/user-friends.png");
        } else if (routeName === "Journal") {
          image = require("../assets/Icons/book-open.png");
        } else if (routeName === "DashBoard") {
          image = require("../assets/Icons/analytics.png");
        }
        return <Image style={styles.navIcons} source={image} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "black",
      inactiveTintColor: "#999",
      showLabel: false,
      labelStyle: {
        fontSize: 10
      },
      style: {
        backgroundColor: "white"
      }
    }
  }
);
