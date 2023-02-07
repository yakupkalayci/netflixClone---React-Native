// Import React Native
import { StyleSheet } from 'react-native';

// Import Constants
import { CUSTOM_COLORS } from '../../common/constants/colors/customColors';

export default StyleSheet.create({
  videoContainer: {
    height: 270
  },
  video: {
    width: '100%',
    height: '100%'
  },
  text: {
    color: CUSTOM_COLORS.WHITE
  },
  movieDetails: {
    marginTop: 10
  },
  upperDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_COLORS.GRAY,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  upperLeft: {
    justifyContent: 'space-between',
    height: 50
  },
  voteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 50
  },
  voteText: {
    fontSize: 16,
    color: CUSTOM_COLORS.SECONDARY_TEXT_COLOR,
    fontWeight: 'bold'
  },
  genreText: {
    fontSize: 16,
    color: CUSTOM_COLORS.SECONDARY_TEXT_COLOR,
    fontWeight: 'bold'
  },
  describtionText: {
    fontSize: 17,
    color: CUSTOM_COLORS.SECONDARY_TEXT_COLOR
  },
  actionButton: {
    alignItems: 'center'
  }
});
