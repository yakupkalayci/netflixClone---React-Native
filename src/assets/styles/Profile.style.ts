// Import React Native
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

// Import Constants
import { CUSTOM_COLORS } from '../../common/constants/colors/customColors';

type StyleProps = {
  container: ViewStyle;
  pageTitle: TextStyle;
  inputContainer: ViewStyle;
  input: TextStyle;
  buttonContainer: ViewStyle;
  label: TextStyle;
};

export default StyleSheet.create<StyleProps>({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLORS.MAIN_BACKGROUND_COLOR,
    padding: 15
  },
  pageTitle: {
    color: CUSTOM_COLORS.WHITE,
    fontSize: 25,
    fontWeight: '500'
  },
  inputContainer: {
    marginTop: 20
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
    marginTop: 20
  },
  label: {
    color: CUSTOM_COLORS.MAIN_TEXT_COLOR,
    paddingLeft: 5,
    paddingBottom: 5
  }
});
