import { compose, hoistStatics, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import LoginScreen from './LoginScreenView';
import { authOperations } from '../../../modules/auth';
import { NavigationService } from '../../../services';
import { setServerError } from '../../../utils';

function mapStateToProps(state) {
  return {
    isLoading: state.auth.login.isLoading,
    error: state.auth.login.error,
  };
}

const mapDispatchToProps = {
  login: authOperations.login,
};

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('serverError', 'serverErrorSetter', {}),
  withHandlers({
    handleLogin: ({ login, serverErrorSetter }) => async (
      body,
    ) => {
      try {
        await login(body);
        NavigationService.navigateToApp();
      } catch (err) {
        serverErrorSetter(setServerError(err));
      }
    },
    removeErrors: ({ serverErrorSetter, serverError }) => () => {
      if (serverError !== {}) {
        serverErrorSetter({});
      }
    },
  }),
);

export default hoistStatics(enhancer)(LoginScreen);
