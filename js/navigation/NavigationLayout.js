import React from "react";
import ActivityScreen from "../screens/Activity";
import CommunityScreen from "../screens/Community";
import JournalScreen from "../screens/Journal";
import DashBoardScreen from "../screens/Dashboard";
import ActivityDetailsScreen from "../screens/ActivityDetails";
import ProfileScreen from "../screens/Profile";
import EditProfileScreen from "../screens/EditProfile";
import CommunityCategoryScreen from "../screens/CommunityCategory";
import CommunityQuestionScreen from "../screens/CommunityQuestion";
import CommunityTopicScreen from "../screens/CommunityTopic";
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
    ActivityDetails: ActivityDetailsScreen,
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
    CommunityCategory: CommunityCategoryScreen,
    CommunityQuestion: CommunityQuestionScreen,
    CommunityTopic: CommunityTopicScreen,
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
      activeBackgroundColor: "#efefef",
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
