// Import React
import { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

// Import Redux
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

// Import Constants
import { CUSTOM_BG_COLORS_TYPE, CUSTOM_COLORS_TYPE } from 'src/common/constants/colors/customColors';

// Import Firebase Auth
import auth from '@react-native-firebase/auth';

// Import Utils
import { showToast } from 'src/common/utils/showToast';
import { authErrorParser } from 'src/common/utils/authErrorParser';

// Import Alert Types
import { ALERT_TYPE } from 'react-native-alert-notification';

// Import i18next
import { t } from 'i18next';
import { withTranslation } from 'react-i18next';

// Import Screen Type
import { ProfileProps } from 'src/routes/types';

// Import Components
import CustomButton from 'src/components/cta/button/CustomButton';
import Input from 'src/components/form-items/Input';

// styles
import styles from 'src/assets/styles/Profile.style';

function Profile({ navigation }: ProfileProps): JSX.Element {
  // useSelector
  const user = useSelector((state: RootState) => state?.user);

  // useState
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // method for sign out
  const handleSignOut = async () => {
    await auth()
      .signOut()
      .then(() => navigation.navigate('Authentication'));
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
          navigation.navigate('Authentication');
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
        <Input
          value={username}
          onChange={setUsername}
          placeholder={user?.email ? user.email : ''}
          label={t('GLOBAL.LABELS.USERNAME')}
          inputStyle={styles.input}
          labelStyle={styles.label}
        />
        <Input
          value={password}
          onChange={setPassword}
          label={t('GLOBAL.LABELS.PASSWORD')}
          inputStyle={styles.input}
          labelStyle={styles.label}
          isPassword={true}
        />
        <View style={styles.buttonContainer}>
          <CustomButton
            title={t('GLOBAL.COMPONENTS.BUTTON.TITLES.UPDATE_PROFILE')}
            bgColor={CUSTOM_BG_COLORS_TYPE.RED_BG}
            textColor={CUSTOM_COLORS_TYPE.WHITE}
            extraStyles={{ paddingVertical: 10, paddingHorizontal: 15 }}
            onPress={() => updateProfile()}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title={t('GLOBAL.COMPONENTS.BUTTON.TITLES.SIGN_OUT')}
            bgColor={CUSTOM_BG_COLORS_TYPE.GRAY_BG}
            textColor={CUSTOM_COLORS_TYPE.WHITE}
            extraStyles={{ paddingVertical: 10, paddingHorizontal: 15 }}
            onPress={() => handleSignOut()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default withTranslation()(Profile);
