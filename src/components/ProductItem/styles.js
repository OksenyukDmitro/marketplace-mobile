import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    borderColor: colors.border,
    height: 196,
    marginHorizontal: 4,
    marginTop:10,
  },

  touchable: {
    borderRadius: 6,
    flex: 1,
    backgroundColor: colors.white,
  },

  image: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    height: 152,
    width: '100%', 
   },

  title: {
    color: colors.textPrimary,
    fontSize: 14,
    paddingRight: 4,
  },

  price: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '700',
    maxWidth: 100,
  },

  content: {
    paddingTop: 5,
    paddingHorizontal: 8,
    paddingBottom: 6,
  },

  bottomRow: {
    flexDirection: 'row',
    height: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
 
});

export default styles;