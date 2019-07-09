import { StyleSheet } from 'react-native';
import { colors } from '../styles';

const styles = StyleSheet.create({
  labelCenter: {
    textAlign: 'center',
  },

  tabActive: {
    color: colors.primary,
  },

  tabInactive: {
    color: colors.border,
  },

  addButton: {
    position: 'absolute',
    bottom: 8,
    zIndex: 10,
  },
});

export default styles;
