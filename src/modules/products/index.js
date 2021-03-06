import reducer from './productsReducer';
import * as productsActions from './productsActions';
import * as productsOperations from './productsOperations';
import * as productsSelectors from './productsSelectors';
import * as productsConstants from './productsConstants';

export {
  productsActions,
  productsConstants,
  productsOperations,
  productsSelectors,
};
export default reducer;
