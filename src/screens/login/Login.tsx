// Import React
import { useState } from 'react';

// Firebase Auth
import auth from '@react-native-firebase/auth';

// Import 18next
import { t } from 'i18next';

// Import Utils
import { showToast } from '../../common/utils/showToast';
import { authErrorParser } from '../../common/utils/authErrorParser';

// Import Alert Types
import { ALERT_TYPE } from 'react-native-alert-notification';

// Import components
import AuthForm from '../../components/auth-form/AuthForm';

// import {LoginProps} from '../screenTypes';


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
          navigation.navigate(t('PAGE_TITLES.TAB_NAVIGATOR'));
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
    <AuthForm
      type="login"
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      navigation={navigation}
      handleLogin={handleLogin}
    />
  );
}

export default Login;