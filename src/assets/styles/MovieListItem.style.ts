// Import React Native
import { StyleSheet, Dimensions } from 'react-native';

// Import constants
import { CUSTOM_COLORS } from '../../common/constants/colors/customColors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop:10,
    paddingBottom: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: CUSTOM_COLORS.MAIN_INPUT_BG_COLOR
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10
  },
  image: {
    width: 140,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'cover'
  },
  removeButton: {
    backgroundColor: CUSTOM_COLORS.GRAY,
    borderRadius: 8,
    marginTop: 5
  },
  buttonText: {
    color: CUSTOM_COLORS.BLACK,
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5
  },
  innerContainer: {
    paddingLeft: 15,
    paddingRight: 150
  },
  title: {
    color: CUSTOM_COLORS.GRAY,
    fontSize: 18,
    fontWeight: 'bold'
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 25
  },
  vote: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  voteText: {
    color: CUSTOM_COLORS.GRAY,
    marginLeft: 5
  },
  genre: {
    color: CUSTOM_COLORS.GRAY,
    marginTop: 5,
    marginBottom: 5
  },
  description: {
    color: CUSTOM_COLORS.GRAY,
    fontSize: 15
  }
});
