import { StyleSheet } from 'react-native';
import { CUSTOM_COLORS } from '../../common/constants/colors/customColors';

export default StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  col: {
    flexDirection: 'column'
  },
  actionText: {
    color: CUSTOM_COLORS.WHITE,
    fontSize: 15,
    alignSelf: 'center'
  },
  added: {
    color: CUSTOM_COLORS.GREEN
  }
});
