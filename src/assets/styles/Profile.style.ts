import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

type StyleProps = {
  container: ViewStyle;
  pageTitle: TextStyle;
  inputContainer: ViewStyle;
  input: TextStyle;
  buttonContainer: ViewStyle;
  label: TextStyle;
};

export default StyleSheet.create<StyleProps>({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    padding: 15,
  },
  pageTitle: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '500',
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    backgroundColor: '#444',
    color: '#f0f0f0',
    width: '100%',
    borderRadius: 10,
    marginBottom: 7,
    padding: 15,
    fontSize: 17,
  },
  buttonContainer: {
    marginTop: 20,
  },
  label: {
    color: '#f0f0f0',
    paddingLeft: 5,
    paddingBottom: 5,
  }
});
