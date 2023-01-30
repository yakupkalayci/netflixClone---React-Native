import {StyleSheet, ViewStyle, ImageStyle, TextStyle, View} from 'react-native';

type HomeScreenStyleProps = {
  container: ViewStyle;
  imageContainer: ViewStyle;
  mainPoster: ImageStyle;
  actions: ViewStyle;
  actionButton: ViewStyle;
  actionButtonPlay: ViewStyle;
  actionButtonPlayText: TextStyle;
  actionText: TextStyle;
  added: TextStyle;
  innerContainer: ViewStyle;
  modalView: ViewStyle;
  modalHeader: ViewStyle,
  button: ViewStyle;
  modalText: TextStyle;
  modalTitle: TextStyle;
  originalTitle: TextStyle;
  detail: TextStyle;
  closeBtn: ViewStyle;
};

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
  added: {
    color: 'green',
  },
  innerContainer: {
    paddingLeft: 20,
  },
  modalView: {
    position: 'absolute',
    right: -45,
    top: 350,
    margin: 50,
    backgroundColor: '#444',
    borderRadius: 20,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalText: {
    color: '#fff',
    fontSize: 14,
  },
  modalTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  originalTitle: {
    paddingBottom: 5,
  },
  detail: {
    borderTopWidth: 1,
    borderTopColor: 'red',
    color: '#fff',
    paddingTop: 5,
    fontSize: 14,
  },
  closeBtn: {
    alignItems: 'flex-end',
  }
});
