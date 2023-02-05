// Import React
import { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, Button } from 'react-native';

// Import Constants
import { CUSTOM_COLORS } from '../../common/constants/colors/customColors';

// Import Firebase Auth
import auth from '@react-native-firebase/auth';

// Import Utils
import { showToast } from '../../common/utils/showToast';
import { authErrorParser } from '../../common/utils/authErrorParser';
import { getCurrentUser } from '../../common/utils/getCurrentUser';

// Import Alert Types
import { ALERT_TYPE } from 'react-native-alert-notification';

// Import i18next
import { t } from 'i18next';

// import {ProfileProps} from '../screenTypes';

// styles
import styles from '../../assets/styles/Profile.style';

function Profile({ navigation }): JSX.Element {
  // useState
  const [user, setUser] = useState(() => getCurrentUser());
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // method for sign out
  const handleSignOut = async () => {
    await auth()
      .signOut()
      .then(() => navigation.navigate(t('PAGE_TITLES.LOGIN')));
  };

  // method for update profile informations
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
          navigation.navigate(t('PAGE_TITLES.LOGIN'));
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
            color={CUSTOM_COLORS.RED}
            onPress={() => updateProfile()}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title={t('GLOBAL.COMPONENTS.BUTTON.TITLES.SIGN_OUT')} color={CUSTOM_COLORS.GRAY} onPress={() => handleSignOut()} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Profile;
