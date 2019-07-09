import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import SavedScreen from '../screens/Saved/SavedScreenContainer';
import ProfileScreen from '../screens/Profile/ProfileScreenContainer';
import ProductScreen from '../screens/Product/ProductScreenContainer';
import s from './styles';
import { colors } from '../styles';

const routes = {
  [screens.Saved]: SavedScreen,
  [screens.Product]: ProductScreen,
  [screens.Profile]: ProfileScreen,
};

export default createStackNavigator(routes, {
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerStyle: s.headerStyle,
    headerTintColor: colors.textPrimary,
    headerTitleStyle: s.headerTitleStyle,
  },
});
