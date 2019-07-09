import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import AppSwitchNavigator from './AppSwitchNavigator';
import FiltersModal from './FiltersModal';
import ChatModal from './ChatModal';
import NewItemModal from './NewItemModal';

const routes = {
  [screens.App]: AppSwitchNavigator,
  [screens.NewItemModal]: NewItemModal,
  [screens.FilterModal]: FiltersModal,
  [screens.ChatModal]: ChatModal,
};

export default createStackNavigator(routes, {
  headerMode: 'none',
  mode: 'modal',
});
