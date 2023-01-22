import {StyleSheet, ViewStyle, ImageStyle, TextStyle} from 'react-native';

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
  },
  logo: {
    width: 25,
    height: 45,
    resizeMode: 'contain',
  },
  listItem: {
    color: '#f0f0f0',
    fontSize: 18,
  }
});
