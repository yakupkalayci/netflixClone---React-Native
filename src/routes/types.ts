import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
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
        userID: string
    }
}

export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type SignupProps = NativeStackScreenProps<RootStackParamList, 'Signup'>;

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

export type MovieDetaiProps = CompositeScreenProps<
NativeStackScreenProps<InnterStackParamList, 'MovieDetail'>,
NativeStackScreenProps<RootStackParamList>
>;