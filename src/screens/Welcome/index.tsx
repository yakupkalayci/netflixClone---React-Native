import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {WelcomeProps} from '../screenTypes';

import styles from './style';

function Welcome({navigation}: WelcomeProps): JSX.Element {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleLogin = () => {
    navigation.navigate('HomeScreen', {userName: username});
  };

  const handleInput = text => {
    setUsername(text);
  };

  const handleInput2 = text => {
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

export default Welcome;
