// Import React Native
import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';

// Import Constants
import { CUSTOM_COLORS } from '../../common/constants/colors/customColors';

type StyleProps = {
  container: ViewStyle;
  image: ImageStyle;
  inputContainer: ViewStyle;
  input: TextStyle;
  buttonContainer: ViewStyle;
  buttonText: TextStyle;
  infoText: TextStyle;
};

export default StyleSheet.create<StyleProps>({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLORS.MAIN_BACKGROUND_COLOR,
    alignItems: 'center'
  },
  image: {
    width: 300,
    height: 170,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 100
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 80,
    width: '80%'
  },
  input: {
    backgroundColor: CUSTOM_COLORS.MAIN_INPUT_BG_COLOR,
    color: CUSTOM_COLORS.MAIN_TEXT_COLOR,
    width: '100%',
    borderRadius: 10,
    marginBottom: 7,
    padding: 15,
    fontSize: 17
  },
  buttonContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: CUSTOM_COLORS.MAIN_TEXT_COLOR,
    borderRadius: 10,
    marginTop: 20
  },
  buttonText: {
    fontSize: 21,
    textAlign: 'center',
    color: CUSTOM_COLORS.MAIN_TEXT_COLOR,
    padding: 10,
    fontWeight: '500',
    letterSpacing: 1.2
  },
  infoText: {
    fontSize: 15,
    textAlign: 'center',
    color: CUSTOM_COLORS.MAIN_TEXT_COLOR,
    letterSpacing: 1.2,
    marginTop: 20
  }
});
