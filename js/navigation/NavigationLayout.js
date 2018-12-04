import React from "react";
import Account from "../screens/Account/Account";
import Ionicons from "react-native-vector-icons/Ionicons";
import ActivityScreen from "../screens/Activity/Activity";
import CommunityScreen from "../screens/Community/Community";
import JournalScreen from "../screens/Journal/Journal";
import DashBoardScreen from "../screens/Dashboard/Dashboard";
import { sharedNavigationOptions } from "./config";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

const ActivityStack = createStackNavigator(
  {
    Activity: ActivityScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const CommunityStack = createStackNavigator(
  {
    Community: CommunityScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const JournalStack = createStackNavigator(
  {
    Journal: JournalScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const DashBoardStack = createStackNavigator(
  {
    DashBoard: DashBoardScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createBottomTabNavigator(
  {
    Activity: ActivityStack,

    Community: CommunityStack,

    Journal: JournalStack,

    DashBoard: DashBoardStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Activity") {
          iconName = `ios-body`;
        } else if (routeName === "Community") {
          iconName = `ios-contacts`;
        } else if (routeName === "Journal") {
          iconName = `ios-journal`;
        } else if (routeName === "DashBoard") {
          iconName = `ios-clipboard`;
        }
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 25 : 25}
            color={tintColor}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "black",
      inactiveTintColor: "#999",
      labelStyle: {
        fontSize: 10
      },
      style: {
        backgroundColor: "white"
      }
    }
  }
);
