// Import i18next
import { t } from 'i18next';

// Login
import Login from '../screens/login/Login';

// TabNavigator
import TabNavigator from '../navigation/TabNavigator';

// StackNavigator
import StackNavigator from '../navigation/StackNavigator';

// Profile
import Profile from '../screens/profile/Profile';

// Home
import Home from '../screens/home/Home';

// MyList
import MyList from '../screens/my-list/MyList';

export const mainStackRoutes = [
  {
    name: t('PAGE_TITLES.LOGIN'),
    component: Login
  },
  {
    name: t('PAGE_TITLES.TAB_NAVIGATOR'),
    component: TabNavigator
  }
];

export const tabRoutes = [
  {
    name: t('PAGE_TITLES.HOME'),
    component: StackNavigator
  },
  {
    name: t('PAGE_TITLES.PROFILE'),
    component: Profile
  }
];

export const innerStackRoutes = [
  {
    name: t('PAGE_TITLES.HOME_SCREEN'),
    component: Home
  },
  {
    name: t('PAGE_TITLES.MY_LIST'),
    component: MyList
  }
];

console.log(t('PAGE_TITLES.TAB_NAVIGATOR'));