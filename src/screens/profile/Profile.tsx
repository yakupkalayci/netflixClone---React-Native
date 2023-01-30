// Import React
import React from 'react';
import { SafeAreaView, Text, View, TextInput, Button } from 'react-native';

// Import i18next
import { t } from 'i18next';

// Import Redux
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout } from '../../store/reducers/usersReducer';

// import {ProfileProps} from '../screenTypes';

// styles
import styles from '../../assets/styles/Profile.style';

function Profile({ navigation }): JSX.Element {

  // variables
  const dispatch = useAppDispatch();
  const activeUser = useAppSelector((state) => state.users.usersData.activeUser);

  // method for sign out
  const handleSignOut = () => {
    dispatch(logout());
    navigation.navigate('PAGE_TITLES.LOGIN');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>{t('GLOBAL.LABELS.ACCOUNT_INFORMATION')}</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{t('GLOBAL.LABELS.USERNAME')}</Text>
        <TextInput value={activeUser?.username} style={styles.input} />
        <Text style={styles.label}>{t('GLOBAL.LABELS.PASSWORD')}</Text>
        <TextInput value={activeUser?.password} style={styles.input} />
        <View style={styles.buttonContainer}>
          <Button title={t('GLOBAL.COMPONENTS.BUTTON.TITLES.SIGN_OUT')} color="gray" onPress={() => handleSignOut()} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Profile;
