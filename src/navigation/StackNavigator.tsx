// Import React
import React from 'react';

// Import React-Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Routes
import { innerStackRoutes } from '../routes/routes';

// Constant Variables
const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {innerStackRoutes.map((route) => (
      <Stack.Screen key={route.name} name={route.name} component={route.component} />
    ))}
  </Stack.Navigator>
);

export default StackNavigator;
