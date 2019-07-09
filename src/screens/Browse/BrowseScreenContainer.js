import {
  compose,
  withHandlers,
  withState,
  hoistStatics,
  lifecycle,
} from 'recompose';
import BrowseScreen from './BrowseScreenView';
import { connect } from 'react-redux';
import {
  productsSelectors,
  productsOperations,
} from '../../modules/products';
import { NavigationService } from '../../services';

const mapStateToProps = (state) => ({
  list: productsSelectors.getLatest(state),
  isLoading: state.products.latest.isLoading,
  isLoadingMore: state.products.latest.isLoadingMore,
  hasNoMore: state.products.latest.hasNoMore,
});
const mapDispatchToProps = {
  fetchLatest: productsOperations.fetchLatest,
  fetchLatestMore: productsOperations.fetchLatestMore,
};
const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('searchText', 'setSearchText', ''),
  withHandlers({
    openProduct: () => (id) => {
      NavigationService.navigateToProduct(id);
    },
    onChangeSearchText: (props) => (text) => {
      props.setSearchText(text);

      props.navigation.setParams({
        text: text,
      });
    },
  }),
  lifecycle({
    async componentDidMount() {
      const {
        navigation,
        onChangeSearchText,
        searchText,
        fetchLatest,
      } = this.props;
      navigation.setParams({
        onChangeSearchText: onChangeSearchText,
        text: searchText,
      });
      await fetchLatest();
      await fetchLatest();
    },
  }),
);

export default hoistStatics(enhancer)(BrowseScreen);
