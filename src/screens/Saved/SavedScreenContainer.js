import {
  compose,
  hoistStatics,
  lifecycle,
  withHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import SavedScreen from './SavedScreenView';
import {
  productsOperations,
  productsSelectors,
} from '../../modules/products';
import { NavigationService } from '../../services';
import { viewerSelectors } from '../../modules/viewer';
import { withNavigation } from 'react-navigation';

function mapStateToProps(state) {
  return {
    list: productsSelectors.getSaved(state),
    isLoading: state.products.savedProducts.isLoading,
    viewer: viewerSelectors.getViewer(state),
  };
}

const mapDispatchToProps = {
  fetchSaved: productsOperations.fetchSaved,
};

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withHandlers({
    openProduct: () => (id) => {
      NavigationService.navigateToProduct(id);
    },
  }),
  lifecycle({
    componentDidMount() {
      this.focusListener = this.props.navigation.addListener(
        'didFocus',
        async () => {
          this.props.fetchSaved(); 
        },
      );
      this.props.fetchSaved();
    },
    componentWillUnmount() {
      this.focusListener.remove();
    },
  }),
);

export default hoistStatics(enhancer)(withNavigation(SavedScreen));
