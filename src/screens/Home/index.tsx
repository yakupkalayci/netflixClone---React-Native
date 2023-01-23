import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import ProfileIcon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../HomeScreen';
import Profile from '../Profile';

import {TabParamList} from '../screenTypes';

const Tab = createBottomTabNavigator<TabParamList>();

function Home(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          color = focused ? '#fff' : '#555';

          if (route.name === 'HomeScreen') {
            iconName = 'home';
            return <Icon name={iconName} size={size} color={color} />;
          } else if (route.name === 'Profile') {
            iconName = 'person';
            return <ProfileIcon name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'gray',
        tabBarActiveBackgroundColor: '#000',
        tabBarInactiveBackgroundColor: '#000',
        headerShown: false,
      })}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default Home;
