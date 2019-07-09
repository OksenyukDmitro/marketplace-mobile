import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import SettingsScreen from '../screens/Settings/SettingsScreenContainer';
import ProfileScreen from '../screens/Profile/ProfileScreenContainer';

const routes = {
  [screens.Profile]: ProfileScreen,
  [screens.Settings]: SettingsScreen,
};

export default createStackNavigator(routes, {
  initialRouteName: screens.Profile,
  headerLayoutPreset: 'center',
});
