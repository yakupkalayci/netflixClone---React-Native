// Import React
import { useEffect } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

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
import NavigationItem from '../navigation-item/NavigationItem';

// styles
import styles from 'src/assets/styles/Header.style';

function Header(props): JSX.Element {
  // method for navigation to home screen
  const navigateToMovies = () => {
    // navigation.navigate('Home Screen');
    props.navigation.navigate('Home Screen');
  };

  // method for navigation to my list
  const navigateToMyList = () => {
    props.navigation.navigate('My List');
  };

  useEffect(() => {
    const changeLang = async () => await AsyncStorage.setItem('language', JSON.stringify(i18n.language));

    changeLang();
  }, [i18n.language]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/img/icon.png')} style={styles.logo} />
      <NavigationItem onPress={() => navigateToMovies()} target={t('NAVIGATION_MENU.MOVIES')} style={styles.listItem} />
      <NavigationItem target={t('NAVIGATION_MENU.TV_SHOWS')} style={styles.listItem} />
      <NavigationItem
        onPress={() => navigateToMyList()}
        target={t('NAVIGATION_MENU.MY_LIST')}
        style={styles.listItem}
      />
      <TouchableOpacity onPress={() => i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en')}>
        <CustomIcon
          name={i18n.language === 'en' ? CUSTOM_ICON_LIST.UK : CUSTOM_ICON_LIST.TR}
          size={CUSTOM_ICON_SIZES.LARGE}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Header;
