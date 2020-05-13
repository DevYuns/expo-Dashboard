import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from './src/screens/Login';
import DrawerNavigation from './src/components/navigation/DrawerNavigation';
import Test from './src/components/navigation/DrawerNavigation';

const Route = createStackNavigator(
  {
  Home: {
    screen: Login,
  },
  Navigator: {
    screen: DrawerNavigation,
  },
  test: {
    screen: Test,
  }
},
{
  defaultNavigationOptions: {
    header: null,
  }
}
);

const App = createAppContainer(Route);

export default App;
