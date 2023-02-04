import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';

type StyleProps = {
  container: ViewStyle;
  image: ImageStyle;
  inputContainer: ViewStyle;
  input: TextStyle;
  buttonContainer: ViewStyle;
  buttonText: TextStyle;
  infoText: TextStyle;
};

export default StyleSheet.create<StyleProps>({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center'
  },
  image: {
    width: 300,
    height: 170,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 100
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 80,
    width: '80%'
  },
  input: {
    backgroundColor: '#444',
    color: '#f0f0f0',
    width: '100%',
    borderRadius: 10,
    marginBottom: 7,
    padding: 15,
    fontSize: 17
  },
  buttonContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderRadius: 10,
    marginTop: 20
  },
  buttonText: {
    fontSize: 21,
    textAlign: 'center',
    color: '#f0f0f0',
    padding: 10,
    fontWeight: '500',
    letterSpacing: 1.2
  },
  infoText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#f0f0f0',
    letterSpacing: 1.2,
    marginTop: 20
  }
});
