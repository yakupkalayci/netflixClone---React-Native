import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

type InfoModalStyleProps = {
  modalView: ViewStyle;
  modalHeader: ViewStyle,
  button: ViewStyle;
  modalText: TextStyle;
  modalTitle: TextStyle;
  originalTitle: TextStyle;
  detail: TextStyle;
  videoContainer: ViewStyle;
  video: ViewStyle;
};

export default StyleSheet.create<InfoModalStyleProps>({
  modalView: {
    margin: 25,
    backgroundColor: '#444',
    borderRadius: 15,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 15
  },
  originalTitle: {
    marginVertical: 10,
    fontSize: 15,
  },
  detail: {
    borderTopWidth: 1,
    borderTopColor: 'red',
    color: '#fff',
    paddingTop: 10,
    fontSize: 17,
  },
  videoContainer: {
    justifyContent: 'center'
  },
  video: {
    width: '100%',
    height: '60%',
    alignSelf: 'center',
    marginTop: 105
  }
});
