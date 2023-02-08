// Import React Native
import { StyleSheet } from 'react-native';

// Import constants
import { CUSTOM_COLORS } from '../../common/constants/colors/customColors';

export default StyleSheet.create({
  detailsContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    padding: 10,
    backgroundColor: CUSTOM_COLORS.MAIN_INPUT_BG_COLOR,
    width: '100%',
    height: '100%',
    zIndex: 1000
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 7,
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_COLORS.RED,
  },
  headerButtons: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: 17,
    color: CUSTOM_COLORS.WHITE,
    fontWeight: 'bold',
  },
  genre: {
    fontSize: 14,
    color: CUSTOM_COLORS.WHITE,
    paddingTop: 5,
    paddingBottom: 5
  },
  actionButtons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 10
  },
  playButtonContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    padding: 10,
    backgroundColor: CUSTOM_COLORS.MAIN_INPUT_BG_COLOR,
    width: '100%',
    height: '100%',
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 140 / 2
  }
});
