import {
  compose,
  withHandlers,
  withState,
  hoistStatics,
} from 'recompose';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import { productsOperations } from '../../modules/products';
import { NavigationService } from '../../services';
import { viewerSelectors } from '../../modules/viewer';

const mapStateToProps = (state) => ({
  viewer: viewerSelectors.getViewer(state),
});

const mapDispatchToProps = {
  saveProduct: productsOperations.saveProduct,
  removeFromSaved: productsOperations.removeFromSaved,
};

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('isImageError', 'imageErrorSetter', false),
  withHandlers({
    onImageError: ({ imageErrorSetter }) => () => {
      imageErrorSetter(true);
    },
    productsSaveSwitcher: ({
      item,
      removeFromSaved,
      saveProduct,
    }) => (event) => {
      event.stopPropagation();
      if (item.saved) {
        removeFromSaved(item);
      } else {
        saveProduct(item);
      }
    },
    onOpenProduct: ({ product }) => () => {
      NavigationService.navigateToProduct(product.id);
    },
  }),
);

export default hoistStatics(enhancer)(ProductItem);
