import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './style';

function Header({navigation}): JSX.Element {
  const navigateToMovies = () => {
    navigation.navigate('Movies');
  }

  const navigateToMyList = () => {
    navigation.navigate('MyList');
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icon.png')} style={styles.logo} />
      <TouchableOpacity onPress={() => navigateToMovies()}>
        <Text style={styles.listItem}>Movies</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.listItem}>TV Shows</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToMyList()}>
        <Text style={styles.listItem}>My List</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Header;
