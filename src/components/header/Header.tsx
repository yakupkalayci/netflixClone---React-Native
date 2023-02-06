// Import React
import { View, Text, Image, TouchableOpacity } from 'react-native';

// Import i18next
import { t } from 'i18next';

// styles
import styles from '../../assets/styles/Header.style';

function Header({ navigation }): JSX.Element {

  // method for navigation to home screen
  const navigateToMovies = () => {
    navigation.navigate(t('PAGE_TITLES.HOME_SCREEN'));
  };

  // method for navigation to my list
  const navigateToMyList = () => {
    navigation.navigate(t('PAGE_TITLES.MY_LIST'));
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/img/icon.png')} style={styles.logo} />
      <TouchableOpacity onPress={() => navigateToMovies()}>
        <Text style={styles.listItem}>{t('NAVIGATION_MENU.MOVIES')}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.listItem}>{t('NAVIGATION_MENU.TV_SHOWS')}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToMyList()}>
        <Text style={styles.listItem}>{t('NAVIGATION_MENU.MY_LIST')}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Header;
