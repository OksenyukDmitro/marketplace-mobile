import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import BrowseScreen from '../screens/Browse/BrowseScreenContainer';
import ProfileScreen from '../screens/Profile/ProfileScreenContainer';
import ProductScreen from '../screens/Product/ProductScreenContainer';

const routes = {
  [screens.Browse]: BrowseScreen,
  [screens.Profile]: ProfileScreen,
  [screens.Product]: ProductScreen,
};

export default createStackNavigator(routes, {});
