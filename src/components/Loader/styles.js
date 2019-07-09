import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000040',
  },

  indicatorWrapper: {
    backgroundColor: colors.white,
    borderRadius: 10,
    height: 180,
    width: 200,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },

  text: {
    color: colors.textPrimary,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default styles;
