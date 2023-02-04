// Import i18next
import { t } from 'i18next';

// Login
import Login from '../screens/login/Login';

// SignUp
import SignUp from '../screens/sign-up/SignUp';

// TabNavigator
import TabNavigator from '../navigators/TabNavigator';

// StackNavigator
import StackNavigator from '../navigators/StackNavigator';

// Profile
import Profile from '../screens/profile/Profile';

// Home
import Home from '../screens/home/Home';

// MyList
import MyList from '../screens/my-list/MyList';

// Movie Detail
import MovieDetail from '../screens/movie-detail/MovieDetail';

export const authStackRoutes = [
  {
    name: t('PAGE_TITLES.LOGIN'),
    component: Login
  },
  {
    name: t('PAGE_TITLES.SIGN_UP'),
    component: SignUp
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

export const homeStackRoutes = [
  {
    name: t('PAGE_TITLES.HOME_SCREEN'),
    component: Home
  },
  {
    name: t('PAGE_TITLES.MY_LIST'),
    component: MyList
  },
  {
    name: t('PAGE_TITLES.MOVIE_DETAIL'),
    component: MovieDetail
  }
];