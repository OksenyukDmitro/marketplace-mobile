import { compose, withHandlers, hoistStatics } from 'recompose';
import { connect } from 'react-redux';
import SettingsScreen from './SettingsScreenView';
import { viewerActions } from '../../modules/viewer';
import { Api } from '../../api';
import { NavigationService } from '../../services';
import { Alert } from 'react-native';

const mapDispatchToProps = {
  logout: viewerActions.logout,
};

const enhancer = compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  withHandlers({
    handleLogout: ({ logout }) => () => {
      Alert.alert('Logout', 'Are you sure you want to logout', [
        {
          text: 'Ok',
          onPress: () => {
            Api.Auth.removeToken();
            logout();
            NavigationService.navigateToProfile();
          },
        },
        {
          text: 'Cancel',
        },
      ]);
    },
  }),
);

export default hoistStatics(enhancer)(SettingsScreen);
