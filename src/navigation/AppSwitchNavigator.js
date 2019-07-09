import { createSwitchNavigator } from 'react-navigation';
import AuthNavigator from './AuthNavigator';
import AppTabNavigator from './AppTabNavigator';
import screens from './screens';
import StartScreen from '../screens/Start/StartScreenContainer';

const routes = {
  [screens.Start]: StartScreen,
  [screens.MainApp]: AppTabNavigator,
  [screens.Auth]: AuthNavigator,
};

export default createSwitchNavigator(routes, {});
