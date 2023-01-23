import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
};

export type TabParamList = {
  HomeScreen: undefined;
  Profile: undefined;
};

export type WelcomeProps = NativeStackScreenProps<
  RootStackParamList,
  'Welcome'
>;

