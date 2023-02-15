// Import i18next
import { t } from 'i18next';

// Authentication
import Auth from 'src/screens/authentication/Auth';

// TabNavigator
import TabNavigator from 'src/routes/TabNavigator';

// StackNavigator
import StackNavigator from 'src/routes/StackNavigator';

// Profile
import Profile from 'src/screens/profile/Profile';

// Home
import Home from 'src/screens/home/Home';

// MyList
import MyList from 'src/screens/my-list/MyList';

// Movie Detail
import MovieDetail from 'src/screens/movie-detail/MovieDetail';

export const authStackRoutes = [
  {
    name: t('PAGE_TITLES.AUTH'),
    component: Auth
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
    name: t('PAGE_TITLES.MOVIES'),
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
