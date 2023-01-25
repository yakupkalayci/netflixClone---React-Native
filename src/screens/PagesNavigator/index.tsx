import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../HomeScreen';
import MyList from '../MyList';

const Stack = createNativeStackNavigator();

function PagesNavigator(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Movies" component={HomeScreen} />
      <Stack.Screen name="MyList" component={MyList} />
    </Stack.Navigator>
  );
}

export default PagesNavigator;
