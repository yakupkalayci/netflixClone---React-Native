// Import React
import React, { useState } from 'react';
import { SafeAreaView, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

// Import 18next
import { t } from 'i18next';

// Import Store
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { login } from '../../store/reducers/usersReducer';

// import {LoginProps} from '../screenTypes';

// Styles
import styles from '../../assets/styles/Login.style';

function Login({ navigation }): JSX.Element {
  // useState
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Variables
  const dispatch = useAppDispatch();
  const activeUser = useAppSelector((state) => state.users.usersData.activeUser);

  // Method for user login
  const handleLogin = () => {
    dispatch(login({ username, password }));
    if (Object.keys(activeUser).length) {
      navigation.navigate(t('PAGE_TITLES.TAB_NAVIGATOR'));
      setUsername('');
      setPassword('');
    } else {
      Alert.alert(t('GLOBAL.COMPONENTS.ALERT.MESSAGES.TRY_AGAIN'));
    }
  };

  // Method for username text input
  const handleInput = (text: string) => {
    setUsername(text);
  };

  // Method for password text input
  const handleInput2 = (text: string) => {
    setPassword(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../../assets/img/logo.png')} style={styles.image} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={username}
          onChangeText={(text) => handleInput(text)}
          placeholder={t('GLOBAL.COMPONENTS.TEXT_INPUT.PLACEHOLDERS.EMAIL_OR_PHONE')}
          style={styles.input}
        />
        <TextInput
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => handleInput2(text)}
          placeholder={t('GLOBAL.COMPONENTS.TEXT_INPUT.PLACEHOLDERS.PASSWORD')}
          style={styles.input}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
          <Text style={styles.buttonText}>{t('GLOBAL.COMPONENTS.BUTTON.TITLES.SIGN_IN')}</Text>
        </TouchableOpacity>
        <Text style={styles.infoText}>New to Netflix? Sign up now.</Text>
      </View>
    </SafeAreaView>
  );
}

export default Login;
