// Import React
import { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// Import i18next
import { t } from 'i18next';
import i18n from 'src/common/locales/i18n';

// Import Constants
import { CUSTOM_ICON_LIST } from 'src/common/constants/icon/customIconList';
import { CUSTOM_ICON_SIZES } from 'src/common/constants/icon/iconSizes';

// Import Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import Components
import CustomIcon from '../icons/CustomIcon';

// styles
import styles from 'src/assets/styles/Header.style';

function Header({ navigation }): JSX.Element {

  // method for navigation to home screen
  const navigateToMovies = () => {
    navigation.navigate('Home Screen');
  };

  // method for navigation to my list
  const navigateToMyList = () => {
    navigation.navigate('My List');
  };

  useEffect(() => {
    const changeLang = async() => await AsyncStorage.setItem('language', JSON.stringify(i18n.language));

    changeLang();
  }, [i18n.language]);

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
      <TouchableOpacity onPress={() => i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en')}>
        <CustomIcon name={i18n.language === 'en' ? CUSTOM_ICON_LIST.UK : CUSTOM_ICON_LIST.TR} size={CUSTOM_ICON_SIZES.LARGE}/>
      </TouchableOpacity>
    </View>
  );
}

export default Header;
