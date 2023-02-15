// Import React
import { useState } from 'react';

// Firebase Auth
import auth from '@react-native-firebase/auth';

// Import 18next
import { t } from 'i18next';

// Import Utils
import { showToast } from 'src/common/utils/showToast';
import { authErrorParser } from 'src/common/utils/authErrorParser';

// Import Alert Types
import { ALERT_TYPE } from 'react-native-alert-notification';

// Import components
import AuthForm from 'src/components/auth-form/AuthForm';

// Import Screen Type
import { AuthenticationProps } from 'src/routes/types';

function Auth({ navigation }: AuthenticationProps): JSX.Element {
  // useState
  const [pageType, setPageType] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // Method for user login
  const handleLogin = () => {
    if (email && password) {
      setLoading(true);
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setEmail('');
          setPassword('');
          navigation.navigate('TabNavigator');
        })
        .catch((err) =>
          showToast(ALERT_TYPE.DANGER, t('GLOBAL.COMPONENTS.ALERT.TITLES.ERROR'), authErrorParser(err.message))
        )
        .finally(() => setLoading(false));
    } else {
      showToast(
        ALERT_TYPE.WARNING,
        t('GLOBAL.COMPONENTS.ALERT.TITLES.WARNING'),
        t('GLOBAL.COMPONENTS.ALERT.MESSAGES.INPUTS_CANT_BE_LEFT_EMPTY')
      );
    }
  };

  // Method for user signup
  const handleSignUp = () => {
    if (email && password) {
      if (password !== rePassword) {
        showToast(
          ALERT_TYPE.DANGER,
          t('GLOBAL.COMPONENTS.ALERT.TITLES.WARNING'),
          t('GLOBAL.COMPONENTS.ALERT.MESSAGES.SAME_PASSWORD')
        );

        return;
      }
      setLoading(true);
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          showToast(
            ALERT_TYPE.SUCCESS,
            t('GLOBAL.COMPONENTS.ALERT.TITLES.SUCCESS'),
            t('GLOBAL.COMPONENTS.ALERT.MESSAGES.SIGNED_SUCCESS')
          );
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
      type={pageType}
      setPageType={setPageType}
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      rePassword={rePassword}
      setRePassword={setRePassword}
      handleLogin={handleLogin}
      loading={loading}
      handleSignUp={handleSignUp}
    />
  );
}

export default Auth;
