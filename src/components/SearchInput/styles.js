import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconWrap: {
    position: 'absolute',
    paddingLeft: 8,
  },

  input: {
    backgroundColor: colors.background,
    borderColor: colors.border,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    width: '100%',
    height: '100%',
    paddingLeft: 36,
    paddingRight: 8,
    paddingBottom: 8,
    paddingTop: 7,
  },
});

export default styles;
