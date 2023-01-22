import React from 'react';
import {SafeAreaView, Text, View, TextInput, Button} from 'react-native';

import styles from './style';

function Profile({navigation}): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>Account Information</Text>
      <View style={styles.inputContainer}>
        <TextInput value="yakupkalayci" style={styles.input} />
        <TextInput value="1234" style={styles.input} />
        <View style={styles.buttonContainer}>
          <Button
            title="Sign out"
            color="gray"
            onPress={() => navigation.navigate('Welcome')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Profile;
