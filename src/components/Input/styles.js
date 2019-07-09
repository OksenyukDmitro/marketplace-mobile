import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    position: 'relative',
    width: '100%',
    marginBottom: 16,
  },

  label: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },

  input: {
    backgroundColor: colors.white,
    height: 48,
    width: '100%',
    borderColor: colors.border,
    borderWidth: StyleSheet.hairlineWidth,
    color: colors.textPrimary,
    borderRadius: 6,
    paddingTop: 13,
    paddingBottom: 14,
    paddingRight: 14,
    paddingLeft: 16,
  },

  errorMessage: {
    fontSize: 14,
    color: colors.error,
  },

  errorIcon: {
    position: 'absolute',
    top: 32,
    right: '8%',
    zIndex: 2,
  },

  error: {
    borderColor: colors.error,
    borderWidth: 2,
  },

  success: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
});

export default styles;
