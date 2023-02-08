// Import React
import { useState } from 'react';

// Firebase Auth
import auth from '@react-native-firebase/auth';

// Import 18next
import { t } from 'i18next';

// Import Utils
import { showToast } from 'src/common/utils/showToast';
import { authErrorParser } from 'src/common/utils/authErrorParser';

// IMPORT React-native-alert ALERT TYPES
import { ALERT_TYPE } from 'react-native-alert-notification';

// Import components
import AuthForm from 'src/components/auth-form/AuthForm';

// Import Screen Type
import { SignupProps } from 'src/routes/types';

function SignUp({ navigation }:SignupProps): JSX.Element {
  // useState
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // Method for user signup
  const handleSignUp = () => {
    if (email && password) {
      if (password !== rePassword) {
        showToast(ALERT_TYPE.DANGER, t('GLOBAL.COMPONENTS.ALERT.TITLES.WARNING'), t('GLOBAL.COMPONENTS.ALERT.MESSAGES.SAME_PASSWORD'));

        return;
      }
      setLoading(true);
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          showToast(ALERT_TYPE.SUCCESS, t('GLOBAL.COMPONENTS.ALERT.TITLES.SUCCESS'), t('GLOBAL.COMPONENTS.ALERT.MESSAGES.SIGNED_SUCCESS'));
          setTimeout(() => {
            navigation.navigate('TabNavigator');
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
