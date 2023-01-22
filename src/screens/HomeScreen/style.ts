import {StyleSheet, ViewStyle, ImageStyle, TextStyle} from 'react-native';

type HomeScreenStyleProps = {
  container: ViewStyle;
  imageContainer: ViewStyle;
  mainPoster: ImageStyle;
  actions: ViewStyle;
  actionButton: ViewStyle;
  actionButtonPlay: ViewStyle;
  actionButtonPlayText: TextStyle;
  actionText: TextStyle;
  innerContainer: ViewStyle;
  titles: TextStyle;
}

export default StyleSheet.create<HomeScreenStyleProps>({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    paddingTop: 10,
  },
  imageContainer: {
    paddingTop: 10,
  },
  mainPoster: {
    height: 450,
    width: '90%',
    alignSelf: 'center',
  },
  actions: {
    backgroundColor: '#000',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'space-evenly',
    padding: 10,
    marginTop: 15,
  },
  actionButton: {
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
  },
  actionButtonPlay: {
    backgroundColor: '#fff',
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButtonPlayText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 17,
  },
  actionText: {
    color: '#fff',
    fontSize: 15,
  },
  innerContainer: {
    paddingLeft: 20,
  },
  titles: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 20,
  },
});
