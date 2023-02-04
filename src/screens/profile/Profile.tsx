// Import React
import { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, TextInput, Button } from 'react-native';

// Import Firebase Auth
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

// Import Utils
import { showToast } from '../../common/utils/showToast';
import { authErrorParser } from '../../common/utils/authErrorParser';

// Import Alert Types
import { ALERT_TYPE } from 'react-native-alert-notification';

// Import i18next
import { t } from 'i18next';

// import {ProfileProps} from '../screenTypes';

// styles
import styles from '../../assets/styles/Profile.style';

function Profile({ navigation }): JSX.Element {
  // useState
  const [user, setUser] = useState<FirebaseAuthTypes.User>();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // method for sign out
  const handleSignOut = async () => {
    await auth()
      .signOut()
      .then(() => navigation.navigate(t('PAGE_TITLES.LOGIN')));
  };

  const updateProfile = async () => {
    if (username && password) {
      await user
        ?.updateEmail(username)
        .then(() => {
          user?.updatePassword(password);
        })
        .then(() => {
          showToast(
            ALERT_TYPE.SUCCESS,
            t('GLOBAL.COMPONENTS.ALERT.TITLES.SUCCESS'),
            t('GLOBAL.COMPONENTS.ALERT.MESSAGES.PROFILE_UPDATED')
          );
          navigation.navigate(t('PAGE_TITLES.HOME'));
          setUsername('');
          setPassword('');
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

  useEffect(() => {
    const currentUser = auth().currentUser;

    setUser(currentUser || undefined);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>{t('GLOBAL.LABELS.ACCOUNT_INFORMATION')}</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{t('GLOBAL.LABELS.USERNAME')}</Text>
        <TextInput
          value={username}
          placeholder={user?.email ? user.email : ''}
          onChangeText={setUsername}
          style={styles.input}
        />
        <Text style={styles.label}>{t('GLOBAL.LABELS.PASSWORD')}</Text>
        <TextInput value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
        <View style={styles.buttonContainer}>
          <Button
            title={t('GLOBAL.COMPONENTS.BUTTON.TITLES.UPDATE_PROFILE')}
            color="red"
            onPress={() => updateProfile()}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title={t('GLOBAL.COMPONENTS.BUTTON.TITLES.SIGN_OUT')} color="gray" onPress={() => handleSignOut()} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Profile;
