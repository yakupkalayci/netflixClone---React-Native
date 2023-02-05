// Import React Native
import { StyleSheet } from 'react-native';

// Import Constants
import { CUSTOM_COLORS } from '../../common/constants/colors/customColors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLORS.MAIN_BACKGROUND_COLOR
  },
  title: {
    fontSize: 25,
    color: CUSTOM_COLORS.MAIN_TEXT_COLOR,
    padding: 20
  },
  infoText: {
    paddingLeft: 20,
    color: CUSTOM_COLORS.GRAY,
    fontSize: 17
  }
});
