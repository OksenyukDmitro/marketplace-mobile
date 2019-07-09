import { normalize } from 'normalizr';
import * as actions from './authActions';
import { Api, schemas } from '../../api';


export function login(body) {
  return async function loginThunk(dispatch) {
    let error;
    try {
      dispatch(actions.login.start());

      const result = await Api.Auth.login(body);
      const { user, token } = result.data;

      const { entities } = normalize(user, schemas.user);
      Api.Auth.setToken(token);

      dispatch(actions.login.success({ user, entities }));
    } catch (err) {
      error = err;
      dispatch(actions.login.error({ message: err.message }));
      throw err;
    }
    return error;
  };
}

export function register(body) {
  return async function registerThunk(dispatch) {
    try {
      dispatch(actions.register.start());

      const res = await Api.Auth.register(body);
      const { user, token } = res.data;

      const { entities } = normalize(user, schemas.user);
      Api.Auth.setToken(token);

      dispatch(actions.register.success({ user, entities }));
    } catch (err) {
      dispatch(actions.register.error({ message: err.message }));
      throw err;
    }
  };
}
