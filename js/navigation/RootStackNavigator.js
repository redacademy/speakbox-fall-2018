import { createStackNavigator, createAppContainer } from 'react-navigation';
import NavigationLayout from './NavigationLayout';

const AppNavigator = createStackNavigator(
  {
    Navlayout: NavigationLayout,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
