import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  HomeScreen: {
    userName: string;
  };
};

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
};

export type WelcomeProps = NativeStackScreenProps<
  RootStackParamList,
  'Welcome'
>;

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'HomeScreen'
>;


