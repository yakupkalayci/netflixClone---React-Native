// Import React
import { useState } from 'react';
import { SafeAreaView, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

// Firebase Auth
import auth from '@react-native-firebase/auth';

// Import 18next
import { t } from 'i18next';

// Import Utils
import { handleNavigate } from '../../common/utils/handleNavigate';
import { showToast } from '../../common/utils/showToast';
import { authErrorParser } from '../../common/utils/authErrorParser';

// IMPORT React-native-alert ALERT TYPES
import { ALERT_TYPE } from 'react-native-alert-notification';

// import {LoginProps} from '../screenTypes';

// Styles
import styles from '../../assets/styles/Login.style';

function SignUp({ navigation }): JSX.Element {
  // useState
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [rePassword, setRePassword] = useState<string>();

  // Method for user signup
  const handleSignUp = () => {
    if(email && password) {
      if (password !== rePassword) {
        showToast(ALERT_TYPE.DANGER, 'Try Again', 'Passwords must be same..');

        return;
      }

      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          showToast(ALERT_TYPE.SUCCESS, 'Success', 'You have signed successfully!');
          setTimeout(() => {
              navigation.navigate(t('PAGE_TITLES.TAB_NAVIGATOR'));
          }, 2000);
        })
        .catch((err) => {
          showToast(ALERT_TYPE.DANGER, 'Error', authErrorParser(err.message));
      });
    }
    else {
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
        <TextInput
          value={rePassword}
          onChangeText={setRePassword}
          placeholder={t('GLOBAL.COMPONENTS.TEXT_INPUT.PLACEHOLDERS.RE_PASSWORD')}
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSignUp}>
          <Text style={styles.buttonText}>{t('GLOBAL.COMPONENTS.BUTTON.TITLES.SIGN_UP')}</Text>
        </TouchableOpacity>
        <Text style={styles.infoText} onPress={() => handleNavigate(navigation, t('PAGE_TITLES.LOGIN'))}>
          {t('GLOBAL.LABELS.GO_BACK')}
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default SignUp;
