import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 52,
    marginTop: 20,
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    paddingLeft: 8,
    paddingRight: 16,
    elevation: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerRight: {
    marginRight: 5,
  },
  inputContainer: {
    height: 36,
    flex: 1,
    marginRight: 8,
  },
});

export default styles;
