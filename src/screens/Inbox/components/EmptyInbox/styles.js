import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 60,
    color: colors.textUnused,
    textAlign: 'center',
  },
  btnContainer: {
    flex: 1,
    marginTop: '50%',
    paddingBottom: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
export default styles;
