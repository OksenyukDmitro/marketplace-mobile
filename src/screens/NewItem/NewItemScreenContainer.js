import { connect } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { withFormik } from 'formik';
import {
  compose,
  withHandlers,
  withState,
  hoistStatics,
  lifecycle,
} from 'recompose';
import NewItemScreen from './NewItemScreenView';
import { withClassVariable, validationSchemas } from '../../utils';
import { productsOperations } from '../../modules/products';
import { NavigationService } from '../../services';
import { Api } from '../../api';

const mapDispatchToProps = {
  addProduct: productsOperations.addProduct,
};

function mapStateToProps(state) {
  return {
    isLoading: state.products.addProduct.isLoading,
  };
}

const enhancer = compose(
  withClassVariable('actionSheet', 'setActionSheet', null),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withFormik({
    validationSchema: validationSchemas.addProductSchema,
    mapPropsToValues: () => ({
      title: '',
      description: '',
      photos: [],
      location: '',
      price: '',
    }),
    handleSubmit: async (body, { props, setErrors }) => {
      const data = {
        title: body.title.trim(),
        location: body.location.trim(),
        description: body.description.trim() || 'no description',
        photos: body.photos,
        price: body.price.trim() || '0',
      };
      try {
        const productId = await props.addProduct(data);
        NavigationService.navigateToProduct(productId);
      } catch (err) {
        setErrors({ title: err.message });
        console.log(err.message);
      }
    },
  }),
  withState('isImageUploading', 'imageLoadingIndicatorSetter', false),
  withHandlers({
    imageUploader: ({
      setFieldValue,
      values,
      imageLoadingIndicatorSetter,
    }) => async (image) => {
      imageLoadingIndicatorSetter(true);

      try {
        const res = await Api.Images.uploadImage(image);
        setFieldValue('photos', values.photos.concat(res.data));
        imageLoadingIndicatorSetter(false);
      } catch (error) {
        imageLoadingIndicatorSetter(false);
      }
    },
  }),
  withState('isPriceFree', 'setPrice', false),
  withHandlers({
    onPriceChoose: ({ setPrice }) => (value) => {
      if (value === 'free') setPrice(true);
      else if (value === 'price') setPrice(false);
    },
    setLocation: ({ setFieldValue }) => (value) => {
      setFieldValue('location', value);
    },
    onOpenCamera: ({ imageUploader }) => async () => {
      try {
        await Permissions.getAsync(Permissions.CAMERA);
        await Permissions.getAsync(Permissions.CAMERA_ROLL);
        const res = await ImagePicker.launchCameraAsync();
        if (res.cancelled) {
          return;
        }
        imageUploader(res);
      } catch (error) {
        console.log(error);
      }
    },
    onOpenGallery: ({ imageUploader }) => async () => {
      try {
        await Permissions.getAsync(Permissions.CAMERA);
        await Permissions.getAsync(Permissions.CAMERA_ROLL);
        const res = await ImagePicker.launchImageLibraryAsync();
        if (res.cancelled) {
          return;
        }
        imageUploader(res);
      } catch (error) {
        console.log(error);
      }
    },
  }),
  withHandlers({
    onChooseFromAction: ({ onOpenCamera, onOpenGallery }) => (
      index,
    ) => {
      switch (index) {
        case 0:
          onOpenCamera();
          break;
        case 1:
          onOpenGallery();
          break;
        default:
          break;
      }
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.navigation.setParams({
        handleSubmit: this.props.handleSubmit,
      });
    },
  }),
);

export default hoistStatics(enhancer)(NewItemScreen);
