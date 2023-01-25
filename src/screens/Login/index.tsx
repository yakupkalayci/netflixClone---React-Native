import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {login} from '../../store/reducers/usersReducer';

import {LoginProps} from '../screenTypes';

import styles from './style';

function Login({navigation}: LoginProps): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useAppDispatch();
  const activeUser = useAppSelector(state => state.users.usersData.activeUser);

  const handleLogin = () => {
    dispatch(login({username: username, password: password}));
    if (Object.keys(activeUser).length) {
      navigation.navigate('HomeScreen');
      setUsername('');
      setPassword('');
    } else {
      Alert.alert('Try again..');
    }
  };

  const handleInput = (text: string) => {
    setUsername(text);
  };

  const handleInput2 = (text: string) => {
    setPassword(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../../assets/logo.png')} style={styles.image} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={username}
          onChangeText={text => handleInput(text)}
          placeholder="Email or phone number"
          style={styles.input}
        />
        <TextInput
          value={password}
          secureTextEntry={true}
          onChangeText={text => handleInput2(text)}
          placeholder="Password"
          style={styles.input}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.infoText}>New to Netflix? Sign up now.</Text>
      </View>
    </SafeAreaView>
  );
}

export default Login;
