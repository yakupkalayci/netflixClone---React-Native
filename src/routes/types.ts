import type { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams, CompositeNavigationProp } from '@react-navigation/native';

// Import Data Types
import { MovieListData } from 'src/screens/home/_types/movieListData';

export type RootStackParamList = {
  Authentication: undefined;
  TabNavigator: undefined;
};

export type TabParamList = {
  Home: NavigatorScreenParams<RootStackParamList>;
  Profile: NavigatorScreenParams<RootStackParamList>;
};

export type InnterStackParamList = {
  HomeScreen: undefined;
  MyList: undefined;
  MovieDetail: {
    title: string;
    genre: [] | object;
    desc: string;
    imgLink: string;
    vote: number;
    id: number;
    userID: string;
  };
};

export type AuthenticationProps = NativeStackScreenProps<RootStackParamList, 'Authentication'>;

export type ProfileProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Profile'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type HomeScreenProps = CompositeScreenProps<
  NativeStackScreenProps<InnterStackParamList, 'HomeScreen'>,
  NativeStackScreenProps<TabParamList>
>;

export type MyListProps = CompositeScreenProps<
  NativeStackScreenProps<InnterStackParamList, 'MyList'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type MyListNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<InnterStackParamList, 'MyList'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export type MovieDetailProps = CompositeScreenProps<
  NativeStackScreenProps<InnterStackParamList, 'MovieDetail'>,
  NativeStackScreenProps<RootStackParamList>
>;
