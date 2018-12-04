import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Navlayout: NavigationLayout
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
