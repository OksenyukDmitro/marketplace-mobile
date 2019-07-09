import React from 'react';
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import T from 'prop-types';
import s from './styles';
import { NavigationService } from '../../../services';
import { validationSchemas } from '../../../utils';
import { Input, Touchable } from '../../../components';

function RegisterScreen({
  handleRegister,
  serverError,
  removeErrors,
  isLoading,
}) {
  return (
    <Formik
      validationSchema={validationSchemas.register}
      initialValues={{ email: '', password: '', passwordAgain: '' }}
      onSubmit={async (body) => {
        await handleRegister(body);
      }}
    >
      {(props) => (
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={s.container}
          scrollEnabled
        >
          <View style={s.inputsWrap}>
            <Input
              serverError={serverError}
              removeErrors={removeErrors}
              autoCompleteType="off"
              label="Email"
              fieldKey="email"
              formikProps={props}
              placeholder="Email"
            />
            <Input
              serverError={serverError}
              removeErrors={removeErrors}
              autoCompleteType="off"
              label="Full name"
              fieldKey="fullName"
              formikProps={props}
              placeholder="Full name"
            />
            <Input
              serverError={serverError}
              removeErrors={removeErrors}
              secureTextEntry
              formikProps={props}
              fieldKey="password"
              placeholder="Password"
              label="Password"
            />
            <Input
              serverError={serverError}
              removeErrors={removeErrors}
              secureTextEntry
              formikProps={props}
              fieldKey="passwordAgain"
              placeholder="Repeat password"
              label="Repeat password"
            />
          </View>
          <View style={s.bottomBar}>
            <View style={s.bottomLeft}>
              <Touchable
                onPress={() => NavigationService.navigateBrowse()}
                useOpacityAndroid
              >
                <Text style={s.text}>Login as Guest</Text>
              </Touchable>

              <Touchable
                onPress={() => NavigationService.navigateToLogin()}
                useOpacityAndroid
              >
                <Text style={s.textButton}>LOGIN</Text>
              </Touchable>
            </View>

            <Touchable
              disabled={isLoading ? true : false}
              style={s.btnContainer}
              onPress={props.handleSubmit}
              useOpacityAndroid
            >
              <Text style={s.btnText}>
                {' '}
                {isLoading ? 'Loading' : 'REGISTER'}
              </Text>
            </Touchable>
          </View>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
}

RegisterScreen.propTypes = {
  handleRegister: T.func,
  serverError: T.object,
  removeErrors: T.func,
  isLoading: T.bool,
  handleSubmit: T.func,
};

RegisterScreen.defaultProps = {
  handleRegister: () => {},
  removeErrors: () => {},
  isLoading: false,
  serverError: '',
  handleSubmit: () => {},
};

RegisterScreen.navigationOptions = () => ({
  title: 'Register',
  headerLeft: null,
});

export default RegisterScreen;
