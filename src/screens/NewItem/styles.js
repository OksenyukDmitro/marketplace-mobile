import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.background,
    flexGrow: 1,
  },

  informationFieldset: {
    paddingHorizontal: 16,
    marginTop: 15,
    width: '100%',
    justifyContent: 'flex-start',
  },

  fieldsetTitle: {
    fontWeight: '600',
    color: colors.textPrimary,
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 16,
    paddingLeft: 16,
  },

  keyTitle: {
    fontWeight: '600',
    color: colors.textPrimary,
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 16,
  },

  input: {
    backgroundColor: colors.white,
    height: 48,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderRadius: 6,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,

  },

  inputError: {
    color: colors.error,
    marginBottom: 6,
  },

  // ---------- PHOTOS


  photosFieldset: {
    marginTop: 8,
    width: '100%',
    height: 99,
    justifyContent: 'space-between',
  },

  photosContainer: {
    height: 64,
    paddingHorizontal: 13,
    paddingVertical: 8,
    backgroundColor: colors.white,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  addPhoto: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    backgroundColor: colors.background,
    height: 48,
    width: 48,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
  },

  thumbs: {
    height: 48,
    width: 48,
    borderRadius: 6,
    marginHorizontal: 3,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    backgroundColor: colors.background,
  },

  // -------------- PRICE

  priceFieldset: {
    marginTop: 32,
    width: '100%',
    justifyContent: 'flex-start',
  },

  priceContainer: {
    backgroundColor: colors.white,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    width: '100%',
  },

  selectPriceContainer: {
    height: 80,
    justifyContent: 'center',
    paddingHorizontal: 16,
    alignItems: 'center',
  },

  line: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    width: '100%',
  },

  priceInput: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    borderRadius: 6,
    height: 47,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginVertical: 16,
    width: '100%',
  },

  // ------------LOCATION

  locationFieldset: {
    marginTop: 8,
    height: 100,
    marginBottom: 16,
    width: '100%',
    justifyContent: 'space-between',
  },

  locationFieldsetTitle: {
    fontWeight: '600',
    color: colors.textPrimary,
    fontSize: 14,
    textAlign: 'left',
    paddingLeft: 16,
  },

  locationContainer: {
    height: 64,
  },

  // ----------------- HEADER

  headerRight: {
    color: colors.primary,
    fontSize: 16,
    marginRight: 16,
    fontWeight: '500',
  },

  headerLeft: {
    marginLeft: 16,
  },


});

export default styles;