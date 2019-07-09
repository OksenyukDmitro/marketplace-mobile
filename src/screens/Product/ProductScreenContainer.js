import {
  compose,
  withHandlers,
  withState,
  hoistStatics,
  lifecycle,
} from 'recompose';
import { connect } from 'react-redux';
import ProductScreen from './ProductScreenView';
import {
  productsOperations,
  productsSelectors,
} from '../../modules/products';
import { viewerSelectors, viewerActions } from '../../modules/viewer';
import { chatsOperations } from '../../modules/chats';
import { getIdFromNavigation } from '../../utils';
import { NavigationService } from '../../services';
import { getPhoneNumber, openUrl } from './helpers';
import { Alert } from 'react-native';
function mapStateToProps(state, props) {
  const productId = getIdFromNavigation(props);
  return {
    productId,
    product: productsSelectors.getProduct(state, productId),
    owner: productsSelectors.getProductOwner(state, productId),
    isLoading: state.products.product.isLoading,
    viewer: viewerSelectors.getViewer(state),
  };
}

const mapDispatchToProps = {
  fetchProduct: productsOperations.fetchProduct,
  fetchSeller: productsOperations.fetchSeller,
  saveProduct: productsOperations.saveProduct,
  removeFromSaved: productsOperations.removeFromSaved,
  createChat: chatsOperations.createChat,
};

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('isImageError', 'imageErrorSetter', false),
  withState('isReadMore', 'setIsReadMore', false),
  withState('isDialogOpen', 'openDialog', false),
  withState('isSaved', 'setSaved', false),
  withHandlers({
    onImageError: ({ imageErrorSetter }) => () => {
      imageErrorSetter(true);
    },
    readMore: (props) => () => {
      props.setIsReadMore(!props.isReadMore);
    },
    productsSaveSwitcher: ({
      product,
      removeFromSaved,
      saveProduct,
      ...props
    }) => async () => {
      if (product.saved) {
        await removeFromSaved(product);
        props.setSaved(false);
      } else {
        await saveProduct(product);
        props.setSaved(true);
      }
    },
    openChat: (props) => async () => {
      if (!props.viewer || props.viewer === null) {
        props.openDialog(true);
        return;
      }
      if (!props.product.chatId) {
        const chat = await props.createChat(props.productId);
        NavigationService.navigateToChat(chat);
      } else {
        NavigationService.navigateToChat(props.product.chatId);
      }
    },

    openProfile: (props) => () => {
      NavigationService.navigateToProfile(props.owner.id);
    },
    handleToLogin: () => () => {
      NavigationService.navigateToLogin();
    },
    handleClose: (props) => () => {
      props.openDialog(false);
    },
    handleCallPress: ({ viewer, productOwner }) => () => {
      if (viewer) {
        if (productOwner && productOwner.phone) {
          const phoneNumber = getPhoneNumber(productOwner.phone);
          openUrl(phoneNumber);
        } else {
          Alert.alert(
            'Sorry, number is not available',
            'Please, send message to contact the seller',
          );
        }
      } else {
        Alert.alert('Login to contact the seller', '', [
          {
            text: 'Cancel',
          },
          {
            text: 'Login',
            onPress: () => {
              NavigationService.navigateToLogin();
            },
          },
        ]);
      }
    },
  }),
  lifecycle({
    async componentDidMount() {
      const {
        fetchProduct,
        fetchSeller,
        navigation,
        product,
        productId,
        setSaved,
      } = this.props;

      fetchProduct(productId);
      fetchSeller(productId);
      const { setParams } = navigation;
      setParams({ product: product });
      setSaved(product.saved);
    },
    componentDidUpdate(prevProps, prevState) {
      const {
        fetchProduct,
        fetchSeller,
        productId,
        setSaved,
        isSaved,
      } = this.props;
      if (prevProps.productId !== productId) {
        fetchProduct(productId);
        fetchSeller(productId);
      }
      if (prevProps.isSaved !== isSaved) {
        setSaved(isSaved);
      }
    },
  }),
);

export default hoistStatics(enhancer)(ProductScreen);
