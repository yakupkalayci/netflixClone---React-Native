// Import React Native
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

// Import Constants
import { CUSTOM_COLORS } from '../../common/constants/colors/customColors';

type InfoModalStyleProps = {
  modalView: ViewStyle;
  modalHeader: ViewStyle,
  button: ViewStyle;
  modalText: TextStyle;
  modalTitle: TextStyle;
  originalTitle: TextStyle;
  detail: TextStyle;
  videoContainer: ViewStyle;
  video: ViewStyle;
};

export default StyleSheet.create<InfoModalStyleProps>({
  modalView: {
    margin: 25,
    backgroundColor: CUSTOM_COLORS.MAIN_INPUT_BG_COLOR,
    borderRadius: 15,
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
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 15
  },
  originalTitle: {
    marginVertical: 10,
    fontSize: 15
  },
  detail: {
    borderTopWidth: 1,
    borderTopColor: CUSTOM_COLORS.RED,
    color: CUSTOM_COLORS.WHITE,
    paddingTop: 10,
    fontSize: 17
  },
  videoContainer: {
    justifyContent: 'center'
  },
  video: {
    width: '100%',
    height: '60%',
    alignSelf: 'center',
    marginTop: 105
  }
});
