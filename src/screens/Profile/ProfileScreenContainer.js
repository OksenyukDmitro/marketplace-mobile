import { connect } from 'react-redux';
import {
  compose,
  withHandlers,
  hoistStatics,
  lifecycle,
} from 'recompose';
import ProfileScreen from './ProfileScreenView';
import { viewerSelectors } from '../../modules/viewer';
import { getIdFromNavigation } from '../../utils';
import { userSelectors, userOperations } from '../../modules/user';
import { NavigationService } from '../../services';
import { withNavigation } from 'react-navigation';
import { Api } from '../../api';

function mapStateToProps(state, props) {
  const userId = getIdFromNavigation(props);

  return {
    userId,
    viewer: viewerSelectors.getViewer(state),
    owner: userSelectors.getOwner(state, userId),
    products: userSelectors.getProducts(state),
    count: userSelectors.getCount(state),
    productsIsLoading: state.user.userProducts
      ? state.user.userProducts.isLoading
      : false,
  };
}

const mapDispatchToProps = {
  fetchUser: userOperations.fetchUser,
  fetchUserProducts: userOperations.fetchUserProducts,
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
    async componentDidMount() {
      const {
        viewer,
        owner,
        navigation,
        userId,
        fetchUserProducts,
        products,
        count,
      } = this.props;

      this.focusListener = navigation.addListener(
        'didFocus',
        async () => {
          const token = await Api.Auth.getToken();
          if (token === null) {
            navigation.setParams({
              navProps: {
                user: null,
              },
            });
            return;
          }
          await fetchUserProducts(
            userId !== 'NO-ID' ? owner.id : viewer.id,
          );
          navigation.setParams({
            navProps: {
              user: userId !== 'NO-ID' ? owner : viewer,
              count,
              isViewer: !owner || owner.id === viewer.id,
              viewer: viewer,
            },
          });
        },
      );
      var curOwner;
      var isViewer;
      var curOwnerId;
      if (viewer === null) {
        navigation.setParams({
          navProps: {
            user: null,
          },
        });
        return;
      }
      if (userId !== 'NO-ID') {
        curOwner = owner;
        isViewer = false;
        curOwnerId = userId;
      } else {
        curOwner = viewer;
        isViewer = true;
        curOwnerId = viewer.id;
      }

      await this.props.fetchUser(userId);
      navigation.setParams({
        navProps: {
          user: curOwner,
          isViewer: isViewer,
          viewer: viewer,
        },
      });
      if (!products) await fetchUserProducts(curOwnerId);

      navigation.setParams({
        navProps: {
          user: curOwner,
          count,
          isViewer: isViewer,
          viewer: viewer,
        },
      });
    },
    componentWillUnmount() {
      this.focusListener.remove();
    },
  }),
);

export default hoistStatics(enhancer)(withNavigation(ProfileScreen));
