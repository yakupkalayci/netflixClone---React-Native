import React from 'react';
import {SafeAreaView, Text, View, TextInput, Button} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {logout} from '../../store/reducers/usersReducer';

import {ProfileProps} from '../screenTypes';

import styles from './style';

function Profile({navigation}: ProfileProps): JSX.Element {
  const dispatch = useAppDispatch();
  const activeUser = useAppSelector(state => state.users.usersData.activeUser);

  const handleSignOut = () => {
    dispatch(logout());
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>Account Information</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>username:</Text>
        <TextInput value={activeUser?.username} style={styles.input} />
        <Text style={styles.label}>password:</Text>
        <TextInput value={activeUser?.password} style={styles.input} />
        <View style={styles.buttonContainer}>
          <Button
            title="Sign out"
            color="gray"
            onPress={() => handleSignOut()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Profile;
