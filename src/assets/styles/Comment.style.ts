import { StyleSheet } from 'react-native';
import { CUSTOM_COLORS } from '../../common/constants/colors/customColors';

export default StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_COLORS.MAIN_INPUT_BG_COLOR,
    width: '50%',
    marginLeft: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  comment: {
    color: CUSTOM_COLORS.WHITE
  }
});
