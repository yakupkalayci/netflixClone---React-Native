import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Login: undefined;
  HomeScreen: undefined;
};

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
};

export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export type ProfileProps = BottomTabScreenProps<TabParamList, 'Profile'>;
