// Import React
import { useState } from 'react';
import { SafeAreaView, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

// Firebase Auth
import auth from '@react-native-firebase/auth';

// Import 18next
import { t } from 'i18next';

// Import Utils
import { handleNavigate } from '../../common/utils/handleNavigate';
import { showToast } from '../../common/utils/showToast';
import { authErrorParser } from '../../common/utils/authErrorParser';

// Import Alert Types
import { ALERT_TYPE } from 'react-native-alert-notification';

// import {LoginProps} from '../screenTypes';

// Styles
import styles from '../../assets/styles/Login.style';

function Login({ navigation }): JSX.Element {
  // useState
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Method for user login
  const handleLogin = () => {
    if (email && password) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setEmail('');
          setPassword('');
          handleNavigate(navigation, t('PAGE_TITLES.TAB_NAVIGATOR'));
        })
        .catch((err) =>
          showToast(ALERT_TYPE.DANGER, t('GLOBAL.COMPONENTS.ALERT.TITLES.ERROR'), authErrorParser(err.message))
        );
    } else {
      showToast(
        ALERT_TYPE.WARNING,
        t('GLOBAL.COMPONENTS.ALERT.TITLES.WARNING'),
        t('GLOBAL.COMPONENTS.ALERT.MESSAGES.INPUTS_CANT_BE_LEFT_EMPTY')
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../../assets/img/logo.png')} style={styles.image} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder={t('GLOBAL.COMPONENTS.TEXT_INPUT.PLACEHOLDERS.EMAIL')}
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder={t('GLOBAL.COMPONENTS.TEXT_INPUT.PLACEHOLDERS.PASSWORD')}
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
          <Text style={styles.buttonText}>{t('GLOBAL.COMPONENTS.BUTTON.TITLES.LOGIN')}</Text>
        </TouchableOpacity>
        <Text style={styles.infoText} onPress={() => handleNavigate(navigation, t('PAGE_TITLES.SIGN_UP'))}>
          {t('GLOBAL.LABELS.SIGN_UP_NOW')}
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default Login;
