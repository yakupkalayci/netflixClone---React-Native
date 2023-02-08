// Import React
import { Dispatch, SetStateAction } from 'react';
import { SafeAreaView, Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';

// Import 18next
import { t } from 'i18next';

// Styles
import styles from 'src/assets/styles/AuthForm.style';

interface AuthFormProps {
  type: 'login' | 'signup';
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  password: string;
  navigation: any;
  rePassword?: string;
  setRePassword?: Dispatch<SetStateAction<string>>;
  handleLogin?: () => void;
  handleSignUp?: () => void;
  loading?: boolean;
}

function AuthForm(props: AuthFormProps): JSX.Element {
  // destruct props
  const {
    type,
    email,
    setEmail,
    setPassword,
    password,
    rePassword,
    setRePassword,
    navigation,
    handleLogin,
    handleSignUp,
    loading
  } = props;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../../assets/img/logo.png')} style={styles.image} />
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.inputContainer}>
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
        {type === 'signup' ? (
          <>
            <TextInput
              value={rePassword}
              onChangeText={setRePassword}
              placeholder={t('GLOBAL.COMPONENTS.TEXT_INPUT.PLACEHOLDERS.RE_PASSWORD')}
              secureTextEntry
              style={styles.input}
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={handleSignUp}>
              {loading ? (
                <ActivityIndicator size="large" />
              ) : (
                <Text style={styles.buttonText}>{t('GLOBAL.COMPONENTS.BUTTON.TITLES.SIGN_UP')}</Text>
              )}
            </TouchableOpacity>
            <Text style={styles.infoText} onPress={() => navigation.navigate('Login')}>
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
            <Text style={styles.infoText} onPress={() => navigation.navigate('Signup')}>
              {t('GLOBAL.LABELS.SIGN_UP_NOW')}
            </Text>
          </>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default AuthForm;
