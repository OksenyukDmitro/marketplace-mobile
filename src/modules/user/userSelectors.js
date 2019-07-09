import { createSelector } from 'reselect';
import { viewerSelectors } from '../viewer';

const getProductEntities = (state) => state.entities.products;
const getUserEntities = (state) => state.entities.users;
const getLatestIds = (state) => state.products.latest.items;

export const getLatest = createSelector(
  [getProductEntities, getLatestIds],
  (entities, ids) => ids.map((i) => entities[i]),
);
export const getProducts = createSelector(
  (state) => {
    if (state.user && state.user.userProducts) {
      return state.user.userProducts.items;
    }

    return undefined;
  },
  (item) => item,
);
export const getCount = createSelector(
  (state) => {
    if (state.user && state.user.userProducts) {
      return state.user.userProducts.count;
    }

    return undefined;
  },
  (item) => item,
);
export const getOwner = createSelector(
  (state, id) => {
    const users = getUserEntities(state);

    if (!users) {
      return viewerSelectors.getViewer(state);
    }
    return users[id];
  },
  (item) => item,
);
