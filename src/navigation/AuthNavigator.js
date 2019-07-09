import { createStackNavigator } from 'react-navigation';
import { StyleSheet } from 'react-native';
import screens from './screens';
import LoginScreen from '../screens/Auth/Login/LoginScreenContainer';
import RegisterScreen from '../screens/Auth/Register/RegisterScreenContainer';
import { colors } from '../styles';

const routes = {
  [screens.Login]: LoginScreen,
  [screens.Register]: RegisterScreen,
};

export default createStackNavigator(routes, {
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.white,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.border,
      elevation: 0,
    },
    headerTintColor: colors.textPrimary,
    headerTitleStyle: {
      fontWeight: '400',
      fontSize: 16,
    },
  },
});
