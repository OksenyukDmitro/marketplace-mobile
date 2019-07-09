import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginHorizontal: 60,
    color: colors.textUnused,
    textAlign: 'center',
  },
  btnText: {
    color: colors.white,
    textAlign: 'center',
  },
  btn: {
    marginTop: 8,
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
    height: 34,
    backgroundColor: colors.primary,
  },
});
export default styles;
