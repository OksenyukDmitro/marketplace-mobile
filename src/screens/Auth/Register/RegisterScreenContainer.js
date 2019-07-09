import { connect } from 'react-redux';
import { compose, withHandlers, withState, hoistStatics } from 'recompose';
import RegisterScreen from './RegisterScreenView';
import { authOperations } from '../../../modules/auth';
import { NavigationService } from '../../../services';
import { setServerError } from '../../../utils';

function mapStateToProps(state) {
  return {
    isLoading: state.auth.register.isLoading,
  };
}

const mapDispatchToProps = {
  register: authOperations.register,
};

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('serverError', 'serverErrorSetter', {}),
  withHandlers({
    handleRegister: ({
      serverErrorSetter,
      register,
    }) => async (body) => {
      try {
        await register(body);
        NavigationService.navigateBrowse();
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

export default hoistStatics(enhancer)(RegisterScreen);
