import { normalize } from 'normalizr';
import * as actions from './viewerActions';

import { Api, schemas } from '../../api';

export function fetchViewer() {
  return async function fetchViewerThunk(dispatch) {
    try {
      dispatch(actions.fetchViewer.start());

      const result = await Api.Auth.getViewer();
      const user = result.data;
      const { entities } = normalize(user, schemas.user);

      dispatch(actions.fetchViewer.success({ user, entities }));
       
    } catch (err) {
      dispatch(actions.fetchViewer.error({ message: err.message }));
    }
  };
}
