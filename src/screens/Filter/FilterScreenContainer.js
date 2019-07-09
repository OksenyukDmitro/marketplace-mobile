import {
  compose,
  withHandlers,
  withState,
  hoistStatics,
} from 'recompose';
import { connect } from 'react-redux';
import FilterScreen from './FilterScreenView';

const enhancer = compose(
  connect(),
  withState('isPriceFree', 'setPrice', false),
  withHandlers({
    onPriceChoose: ({ setPrice }) => (value) => {
      if (value === 'free') setPrice(true);
      else if (value === 'price') setPrice(false);
    },
  }),
);

export default hoistStatics(enhancer)(FilterScreen);
