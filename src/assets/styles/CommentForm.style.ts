import { StyleSheet } from 'react-native';
import { CUSTOM_COLORS } from '../../common/constants/colors/customColors';

export default StyleSheet.create({
  input: {
    backgroundColor: CUSTOM_COLORS.MAIN_INPUT_BG_COLOR,
    color: CUSTOM_COLORS.MAIN_TEXT_COLOR,
    width: '100%',
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
    fontSize: 17
  }
});
