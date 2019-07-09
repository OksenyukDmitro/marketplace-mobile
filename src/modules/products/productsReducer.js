import { handleActions } from '@letapp/redux-actions';
import * as actions from './productsActions';

const INITIAL_STATE = {
  latest: {
    items: [],
    isLoading: false,
    isError: false,
    error: null,
    isLoadingMore: false,
    isErrorMore: false,
    errorMore: null,
    hasNoMore: false,
  },
  bookmarks: {
    items: [],
    isLoading: false,
    isError: false,
    error: null,
  },
  addProduct: {
    product: [],
    isLoading: false,
    isError: false,
    error: null,
  },
  product: {
    isLoading: false,
    isError: false,
    error: null,
  },
  saveProduct: {
    isLoading: false,
    error: null,
    isError: false,
  },

  removeFromSaved: {
    isLoading: false,
    error: null,
    isError: false,
  },

  savedProducts: {
    isLoading: false,
    error: null,
    isError: false,
    items: [],
  },
};

export default handleActions(
  {
    [actions.fetchLatest.start]: (state) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoading: true,
        isError: false,
        error: null,
        hasNoMore: false,
      },
    }),
    [actions.fetchLatest.success]: (state, action) => ({
      ...state,

      latest: {
        ...state.latest,
        isLoading: false,
        items: action.payload.result,
      },
    }),
    [actions.fetchLatest.error]: (state, action) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
    [actions.fetchLatestMore.start]: (state) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoadingMore: true,
        isErrorMore: false,
        errorMore: null,
      },
    }),
    [actions.fetchLatestMore.success]: (state, action) => ({
      ...state,

      latest: {
        ...state.latest,
        isLoadingMore: false,
        items: state.latest.items.concat(action.payload.result),
      },
    }),
    [actions.fetchLatestMore.error]: (state, action) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoadingMore: false,
        isErrorMore: true,
        errorMore: action.payload,
      },
    }),
    [actions.addProduct.start]: (state) => ({
      ...state,
      addProduct: {
        ...state.addProduct,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.addProduct.success]: (state) => ({
      ...state,
      addProduct: {
        ...state.addProduct,
        isLoading: false,
      },
    }),
    [actions.addProduct.error]: (state, action) => ({
      ...state,
      addProduct: {
        ...state.addProduct,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
    [actions.fetchProduct.start]: (state) => ({
      ...state,
      product: {
        ...state.product,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchProduct.success]: (state) => ({
      ...state,
      product: {
        ...state.product,
        isLoading: false,
      },
    }),
    [actions.fetchProduct.error]: (state, action) => ({
      ...state,
      product: {
        ...state.product,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
    [actions.fetchSellerProducts.start]: (state) => ({
      ...state,
      sellerProducts: {
        ...state.sellerProducts,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchSellerProducts.success]: (state, action) => ({
      ...state,
      sellerProducts: {
        ...state.sellerProducts,
        isLoading: false,
        items: action.payload.result.list,
      },
    }),
    [actions.fetchSellerProducts.error]: (state, action) => ({
      ...state,
      sellerProducts: {
        ...state.sellerProducts,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
    [actions.fetchSeller.start]: (state) => ({
      ...state,
      seller: {
        ...state.seller,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchSeller.success]: (state) => ({
      ...state,
      seller: {
        ...state.product,
        isLoading: false,
      },
    }),
    [actions.fetchSeller.error]: (state, action) => ({
      ...state,
      seller: {
        ...state.product,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
    [actions.saveProduct.start]: (state) => ({
      ...state,
      saveProduct: {
        ...state.saveProduct,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.saveProduct.success]: (state) => ({
      ...state,
      saveProduct: {
        ...state.saveProduct,
        isLoading: false,
      },
    }),
    [actions.saveProduct.error]: (state, action) => ({
      ...state,
      saveProduct: {
        ...state.saveProduct,
        isLoading: false,
        error: action.payload.err.message,
        isError: true,
      },
    }),
    [actions.removeFromSaved.start]: (state) => ({
      ...state,
      removeFromSaved: {
        ...state.removeFromSaved,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.removeFromSaved.success]: (state) => ({
      ...state,
      removeFromSaved: {
        ...state.removeFromSaved,
        isLoading: false,
      },
    }),
    [actions.removeFromSaved.error]: (state, action) => ({
      ...state,
      removeFromSaved: {
        ...state.removeFromSaved,
        isLoading: false,
        error: action.payload.err.message,
        isError: true,
      },
    }),
    [actions.fetchSaved.start]: (state) => ({
      ...state,
      savedProducts: {
        ...state.savedProducts,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchSaved.success]: (state, action) => ({
      ...state,
      savedProducts: {
        ...state.savedProducts,
        isLoading: false,
        items: action.payload.result,
      },
    }),
    [actions.fetchSaved.error]: (state, action) => ({
      ...state,
      savedProducts: {
        ...state.savedProducts,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
    [actions.saveProduct.start]: (state) => ({
      ...state,
      saveProduct: {
        ...state.saveProduct,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.saveProduct.success]: (state) => ({
      ...state,
      saveProduct: {
        ...state.saveProduct,
        isLoading: false,
      },
    }),
    [actions.saveProduct.error]: (state, action) => ({
      ...state,
      saveProduct: {
        ...state.saveProduct,
        isLoading: false,
        error: action.payload.err.message,
        isError: true,
      },
    }),

    [actions.removeFromSaved.start]: (state) => ({
      ...state,
      removeFromSaved: {
        ...state.removeFromSaved,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.removeFromSaved.success]: (state) => ({
      ...state,
      removeFromSaved: {
        ...state.removeFromSaved,
        isLoading: false,
      },
    }),
    [actions.removeFromSaved.error]: (state, action) => ({
      ...state,
      removeFromSaved: {
        ...state.removeFromSaved,
        isLoading: false,
        error: action.payload.err.message,
        isError: true,
      },
    }),

    [actions.fetchSaved.start]: (state) => ({
      ...state,
      savedProducts: {
        ...state.savedProducts,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchSaved.success]: (state, action) => ({
      ...state,
      savedProducts: {
        ...state.savedProducts,
        isLoading: false,
        items: action.payload.result,
      },
    }),
    [actions.fetchSaved.error]: (state, action) => ({
      ...state,
      savedProducts: {
        ...state.savedProducts,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
  },
  INITIAL_STATE,
);
