import { createStackNavigator } from 'react-navigation';
import NewItemScreen from '../screens/NewItem/NewItemScreenContainer';
import ChooseLocationScreen from '../screens/ChooseLocation/ChooseLocationScreenContainer';
import screens from './screens';
import s from './styles';
import { colors } from '../styles';

const routes = {
  [screens.AddNewItem]: NewItemScreen,
  [screens.Location]: ChooseLocationScreen,
};

export default createStackNavigator(routes, {
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerStyle: s.headerStyle,
    headerTintColor: colors.textPrimary,
    headerTitleStyle: s.headerTitleStyle,
  },
});
