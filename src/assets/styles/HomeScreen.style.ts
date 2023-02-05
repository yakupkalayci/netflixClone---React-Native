// Import React Native
import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';

// Import constants
import { CUSTOM_COLORS } from '../../common/constants/colors/customColors';

type HomeScreenStyleProps = {
  container: ViewStyle;
  imageContainer: ViewStyle;
  mainPoster: ImageStyle;
  actions: ViewStyle;
  actionButton: ViewStyle;
  actionButtonPlay: ViewStyle;
  actionButtonPlayText: TextStyle;
  actionText: TextStyle;
  innerContainer: ViewStyle;
  modalView: ViewStyle;
  modalHeader: ViewStyle,
  button: ViewStyle;
  modalText: TextStyle;
  modalTitle: TextStyle;
  originalTitle: TextStyle;
  detail: TextStyle;
  closeBtn: ViewStyle;
};

export default StyleSheet.create<HomeScreenStyleProps>({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLORS.MAIN_BACKGROUND_COLOR
  },
  imageContainer: {
    paddingTop: 10
  },
  mainPoster: {
    height: 450,
    width: '90%',
    alignSelf: 'center'
  },
  actions: {
    backgroundColor: CUSTOM_COLORS.BLACK,
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'space-evenly',
    padding: 10,
    marginTop: 15
  },
  actionButton: {
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center'
  },
  actionButtonPlay: {
    backgroundColor: CUSTOM_COLORS.WHITE,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center'
  },
  actionButtonPlayText: {
    color: CUSTOM_COLORS.BLACK,
    fontWeight: 'bold',
    fontSize: 17,
  },
  actionText: {
    color: CUSTOM_COLORS.WHITE,
    fontSize: 15
  },
  innerContainer: {
    paddingLeft: 20
  },
  modalView: {
    position: 'absolute',
    right: -45,
    top: 350,
    margin: 50,
    backgroundColor: CUSTOM_COLORS.MAIN_INPUT_BG_COLOR,
    borderRadius: 20,
    padding: 20
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  modalText: {
    color: CUSTOM_COLORS.WHITE,
    fontSize: 14
  },
  modalTitle: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  originalTitle: {
    paddingBottom: 5
  },
  detail: {
    borderTopWidth: 1,
    borderTopColor: CUSTOM_COLORS.RED,
    color: CUSTOM_COLORS.WHITE,
    paddingTop: 5,
    fontSize: 14
  },
  closeBtn: {
    alignItems: 'flex-end'
  }
});
