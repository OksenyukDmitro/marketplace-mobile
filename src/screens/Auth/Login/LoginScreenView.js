import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import T from 'prop-types';
import { Formik } from 'formik';
import s from './styles';
import { validationSchemas } from '../../../utils';
import { Input, Touchable } from '../../../components';
import { NavigationService } from '../../../services';

const isAndroid = Platform.OS === 'android';

function LoginScreen({
  handleLogin,
  serverError,
  removeErrors,
  isLoading,
}) {
  return (
    <Formik
      validationSchema={validationSchemas.login}
      initialValues={{ email: '', password: '' }}
      onSubmit={(body) => {
        handleLogin(body);
      }}
    >
      {(props) => (
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={isAndroid ? '80' : '50'}
          style={s.container}
        >
          <View style={s.inputsWrap}>
            <Input
              serverError={serverError}
              removeErrors={removeErrors}
              label="Email"
              formikProps={props}
              fieldKey="email"
              placeholder="Email"
              autoCompleteType="off"
            />
            <Input
              serverError={serverError}
              removeErrors={removeErrors}
              secureTextEntry
              label="Password"
              placeholder="Password"
              formikProps={props}
              fieldKey="password"
            />
          </View>
          <View style={s.bottomBar}>
            <View style={s.bottomLeft}>
              <Touchable
                onPress={() => NavigationService.navigateToRegister()}
                useOpacityAndroid
              >
                <Text style={s.text}>
                  Don&apos;t have an account?
                </Text>
              </Touchable>
              <Touchable
                onPress={() => NavigationService.navigateToRegister()}
                useOpacityAndroid
              >
                <Text style={s.textButton}>REGISTER</Text>
              </Touchable>
            </View>
            <Touchable
              disabled={isLoading ? true : false}
              style={s.btnContainer}
              onPress={props.handleSubmit}
              useOpacityAndroid
            >
              <Text style={s.btnText}>
                {isLoading ? 'Loading' : 'Login'}
              </Text>
            </Touchable>
          </View>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
}

LoginScreen.propTypes = {
  isLoading: T.bool,
  handleSubmit: T.func,
  handleLogin: T.func,
  serverError: T.object,
  removeErrors: T.func,
};

LoginScreen.defaultProps = {
  handleSubmit: () => {},
  handleLogin: () => {},
  removeErrors: () => {},
  isLoading: false,
  serverError: '',
};

LoginScreen.navigationOptions = {
  title: 'Login',
};

export default LoginScreen;
