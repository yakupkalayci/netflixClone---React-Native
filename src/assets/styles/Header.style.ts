// Import React Native
import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';

// Import constants
import { CUSTOM_COLORS } from '../../common/constants/colors/customColors';

type StyleProps = {
  container: ViewStyle;
  logo: ImageStyle;
  listItem: TextStyle;
};

export default StyleSheet.create<StyleProps>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    opacity: 0.8,
    zIndex: 10,
    padding: 10,
    marginTop: 10
  },
  logo: {
    width: 25,
    height: 45,
    resizeMode: 'contain'
  },
  listItem: {
    color: CUSTOM_COLORS.MAIN_TEXT_COLOR,
    fontSize: 18
  }
});
