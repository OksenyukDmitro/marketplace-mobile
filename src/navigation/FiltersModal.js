import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import FilterScreen from '../screens/Filter/FilterScreenContainer';
import ChooseLocationScreen from '../screens/ChooseLocation/ChooseLocationScreenContainer';

const routes = {
  [screens.Filter]: FilterScreen,
  [screens.Location]: ChooseLocationScreen,
};

export default createStackNavigator(routes, {});
