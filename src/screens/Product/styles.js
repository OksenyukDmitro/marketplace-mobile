import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: colors.backgroundPrimary,
    position: 'relative',
    flex: 1,
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.transparent,
    position: 'absolute',
    top: 0,
    flex: 1,
    width: '100%',
  },
  scroll: {
    width: '100%',
  },
  image: {
    height: 300,
    width: '100%',
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 50,
    marginLeft: 10,
  },
  content: {
    marginBottom: 48,
  },
  bottomBar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  saveButtonContainer: {},

  call: {
    height: 48,
    width: '50%',
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 25,
  },

  message: {
    height: 48,
    width: '50%',
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 25,
  },
  backButton: {
    marginTop: 16,
    marginLeft: 8,
    width: 25,
  },
  saveButton: {
    paddingTop: 36,
    marginRight: '25%',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    right: 0,
    justifyContent: 'flex-end',
  },
  shareButton: {
    marginTop: 16,
    marginRight: '10%',
    width: 25,
  },
  lessText: {},
  moreText: {},
  moreButton: {
    color: colors.primary,
    marginLeft: 8,
  },
  toProfileButton: {
    color: colors.blue,
  },

  descriptionContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.textUnused,
    width: '100%',
    backgroundColor: colors.white,
    paddingBottom: 2,
  },
  buttonContainer: {
    flexDirection: 'row',

    alignItems: 'flex-end',
  },
  ownerContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.textUnused,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: colors.white,
  },
  ownerInfoContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.textUnused,
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: colors.white,
    marginLeft: 8,
  },
  avatarContainer: {
    backgroundColor: colors.white,
    width: 60,
  },
  productInfoContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 240,
    alignItems: 'flex-start',
    marginLeft: 16,

    marginBottom: 16,
    width: '100%',
  },
  productContentContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
  },
  productTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginRight: 16,
    paddingRight: 16,
  },
  productTimeContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  price: {
    alignItems: 'flex-end',
    marginRight: 16,
    justifyContent: 'flex-end',
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    color: colors.white,
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    color: colors.black,
    marginRight: 8,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 16,
    color: colors.grey,
    paddingHorizontal: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
