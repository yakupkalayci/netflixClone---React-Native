// Import React
import { useState } from 'react';

// Firebase Auth
import auth from '@react-native-firebase/auth';

// Import 18next
import { t } from 'i18next';

// Import Utils
import { showToast } from '../../common/utils/showToast';
import { authErrorParser } from '../../common/utils/authErrorParser';

// IMPORT React-native-alert ALERT TYPES
import { ALERT_TYPE } from 'react-native-alert-notification';

// Import components
import AuthForm from '../../components/auth-form/AuthForm';

// import {LoginProps} from '../screenTypes';

function SignUp({ navigation }): JSX.Element {
  // useState
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // Method for user signup
  const handleSignUp = () => {
    if (email && password) {
      if (password !== rePassword) {
        showToast(ALERT_TYPE.DANGER, 'Try Again', 'Passwords must be same..');

        return;
      }
      setLoading(true);
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
        })
        .finally(() => setLoading(false));
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
      type="signup"
      email={email}
      password={password}
      rePassword={rePassword}
      setEmail={setEmail}
      setPassword={setPassword}
      setRePassword={setRePassword}
      navigation={navigation}
      handleSignUp={handleSignUp}
      loading={loading}
    />
  );
}

export default SignUp;
