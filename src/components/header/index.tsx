import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './style';

function Header(): JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icon.png')} style={styles.logo} />
      <Text style={styles.listItem}>TV Shows</Text>
      <Text style={styles.listItem}>Movies</Text>
      <Text style={styles.listItem}>My List</Text>
    </View>
  );
}

export default Header;
