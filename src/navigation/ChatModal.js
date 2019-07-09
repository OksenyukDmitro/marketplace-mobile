import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import ChatScreen from '../screens/Chat/ChatScreenContainer';
import { colors } from '../styles';
import { StyleSheet } from 'react-native';

const routes = {
  [screens.Chat]: ChatScreen,
};

export default createStackNavigator(routes, {
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerStyle: {
      height: 47,
      backgroundColor: colors.white,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.border,
      elevation: 0,
    },
  },
});
