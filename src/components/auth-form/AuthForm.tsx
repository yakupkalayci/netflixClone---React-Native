// Import React
import { Dispatch, SetStateAction } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

// Import 18next
import { t } from 'i18next';

// Import Components
import Input from '../form-items/Input';

// Styles
import styles from 'src/assets/styles/AuthForm.style';

interface AuthFormProps {
  type: 'login' | 'signup';
  setPageType: Dispatch<SetStateAction<'login' | 'signup'>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  password: string;
  rePassword: string;
  setRePassword: Dispatch<SetStateAction<string>>;
  handleLogin: () => void;
  handleSignUp: () => void;
  loading?: boolean;
}

function AuthForm(props: AuthFormProps): JSX.Element {
  // destruct props
  const {
    type,
    setPageType,
    email,
    setEmail,
    setPassword,
    password,
    rePassword,
    setRePassword,
    handleLogin,
    handleSignUp,
    loading
  } = props;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../../assets/img/logo.png')} style={styles.image} />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
        style={styles.inputContainer}
      >
        <Input
          value={email}
          onChange={setEmail}
          placeholder={t('GLOBAL.COMPONENTS.TEXT_INPUT.PLACEHOLDERS.EMAIL')}
          inputStyle={styles.input}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <Input
          value={password}
          onChange={setPassword}
          placeholder={t('GLOBAL.COMPONENTS.TEXT_INPUT.PLACEHOLDERS.PASSWORD')}
          inputStyle={styles.input}
          isPassword={true}
          autoCapitalize={'none'}
        />
        {type === 'signup' ? (
          <>
            <Input
              value={rePassword}
              onChange={setRePassword}
              placeholder={t('GLOBAL.COMPONENTS.TEXT_INPUT.PLACEHOLDERS.RE_PASSWORD')}
              inputStyle={styles.input}
              isPassword={true}
              autoCapitalize={'none'}
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={handleSignUp}>
              {loading ? (
                <ActivityIndicator size="large" />
              ) : (
                <Text style={styles.buttonText}>{t('GLOBAL.COMPONENTS.BUTTON.TITLES.SIGN_UP')}</Text>
              )}
            </TouchableOpacity>
            <Text
              style={styles.infoText}
              onPress={() => {
                setPageType('login');
                setEmail('');
                setPassword('');
                setRePassword('');
              }}
            >
              {t('GLOBAL.LABELS.GO_BACK')}
            </Text>
          </>
        ) : (
          <>
            <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
              {loading ? (
                <ActivityIndicator size="large" />
              ) : (
                <Text style={styles.buttonText}>{t('GLOBAL.COMPONENTS.BUTTON.TITLES.LOGIN')}</Text>
              )}
            </TouchableOpacity>
            <Text
              style={styles.infoText}
              onPress={() => {
                setPageType('signup');
                setEmail('');
                setPassword('');
                setRePassword('');
              }}
            >
              {t('GLOBAL.LABELS.SIGN_UP_NOW')}
            </Text>
          </>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default AuthForm;
