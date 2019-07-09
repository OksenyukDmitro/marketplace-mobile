import { normalize } from 'normalizr';
import * as actions from './productsActions';
import { Api, schemas } from '../../api';
import { viewerServices } from '../viewer';
import { PAGE_SIZE } from './productsConstants';
export function fetchLatest() {
  return async function fetchLatestThunk(dispatch) {
    try {
      dispatch(actions.fetchLatest.start());

      const res = await Api.Products.getLatest();
      const { result, entities } = normalize(
        res.data,
        schemas.ProductList,
      );

      if (result.length < PAGE_SIZE) {
        dispatch(actions.latestHasNoMore());
      }
      await dispatch(
        actions.fetchLatest.success({ result, entities }),
      );
    } catch (err) {
      dispatch(actions.fetchLatest.error({ message: err.message }));
    }
  };
}

export function fetchLatestMore() {
  return async function fetchLatestMoreThunk(dispatch, getState) {
    const {
      isLoadingMore,
      hasNoMore,
      items,
    } = getState().products.latest;

    if (hasNoMore || isLoadingMore) {
      return;
    }
    try {
      dispatch(actions.fetchLatestMore.start());

      const res = await Api.Products.getLatest(
        items.length,
        PAGE_SIZE,
      );
      const { result, entities } = normalize(
        res.data,
        schemas.ProductList,
      );

      if (result.length < PAGE_SIZE) {
        dispatch(actions.latestHasNoMore());
      }
      await dispatch(
        actions.fetchLatestMore.success({ result, entities }),
      );
    } catch (err) {
      dispatch(
        actions.fetchLatestMore.error({ message: err.message }),
      );
    }
  };
}
export function addProduct(body) {
  return async function addProductThunk(dispatch) {
    try {
      dispatch(actions.addProduct.start());

      const res = await Api.Products.addProduct(body);
      const { result, entities } = normalize(
        res.data,
        schemas.Product,
      );

      await dispatch(
        actions.addProduct.success({ result, entities }),
      );

      return result;
    } catch (err) {
      dispatch(actions.addProduct.error({ message: err.message }));
      throw err;
    }
  };
}

export function fetchProduct(id) {
  return async function fetchProductThunk(dispatch) {
    try {
      dispatch(actions.fetchProduct.start());

      const result = await Api.Products.get(id);
      const data = normalize(result.data, schemas.ProductWithOwner);

      await dispatch(actions.fetchProduct.success(data));
    } catch (err) {
      dispatch(actions.fetchProduct.error({ message: err.message }));
    }
  };
}

export function fetchSeller(id) {
  return async function fetchSellerThunk(dispatch) {
    try {
      dispatch(actions.fetchSeller.start());

      const result = await Api.Products.getSeller(id);
      const data = normalize(result.data, schemas.user);

      dispatch(actions.fetchSeller.success(data));
    } catch (err) {
      dispatch(actions.fetchSeller.error({ message: err.message }));
    }
  };
}

export function fetchSellerProducts(id) {
  return async function fetchSellerProductsThunk(dispatch) {
    try {
      dispatch(actions.fetchSellerProducts.start());

      const result = await Api.Products.getSellerProducts(id);
      const data = normalize(result.data, schemas.sellerList);

      dispatch(actions.fetchSellerProducts.success(data));
    } catch (err) {
      dispatch(
        actions.fetchSellerProducts.error({ message: err.message }),
      );
    }
  };
}

export function saveProduct(product) {
  return async function saveProductThunk(dispatch, getState) {
    const { isLoading } = getState().products.saveProduct;
    const savedProduct = {
      ...product,
      saved: true,
    };
    if (isLoading) {
      return;
    }
    const newProduct = normalize(savedProduct, schemas.Product);
    try {
      dispatch(actions.saveProduct.start(newProduct));

      await Api.Products.saveProduct(newProduct.result);

      dispatch(actions.saveProduct.success());
    } catch (err) {
      const { entities } = normalize(product, schemas.Product);
      dispatch(actions.saveProduct.error({ entities, err }));
    }
  };
}

export function removeFromSaved(product) {
  return async function removeFromSavedThunk(dispatch) {
    const unSavedProduct = {
      ...product,
      saved: false,
    };
    const newProduct = normalize(unSavedProduct, schemas.Product);
    try {
      dispatch(actions.removeFromSaved.start(newProduct));

      await Api.Products.removeFromSaved(newProduct.result);

      dispatch(actions.removeFromSaved.success());
    } catch (err) {
      const { entities } = normalize(product, schemas.Product);
      dispatch(actions.removeFromSaved.error({ entities, err }));
    }
  };
}

export function fetchSaved() {
  return async function fetchSavedThunk(dispatch) {
    try {
      dispatch(actions.fetchSaved.start());

      const result = await Api.Products.fetchSaved();
      const data = normalize(result.data, schemas.ProductList);

      dispatch(actions.fetchSaved.success(data));
    } catch (err) {
      dispatch(actions.fetchSaved.error({ message: err.message }));
    }
  };
}
