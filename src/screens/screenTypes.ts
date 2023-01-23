import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  HomeScreen: undefined;
};

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
};

export type WelcomeProps = NativeStackScreenProps<
  RootStackParamList,
  'Welcome'
>;

